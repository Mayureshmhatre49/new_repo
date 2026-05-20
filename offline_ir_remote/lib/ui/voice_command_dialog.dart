import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:speech_to_text/speech_to_text.dart' as stt;
import '../providers/providers.dart';
import '../services/command_parser.dart';

class VoiceCommandDialog extends ConsumerStatefulWidget {
  const VoiceCommandDialog({super.key});

  @override
  ConsumerState<VoiceCommandDialog> createState() => _VoiceCommandDialogState();
}

class _VoiceCommandDialogState extends ConsumerState<VoiceCommandDialog> {
  final stt.SpeechToText _speech = stt.SpeechToText();
  bool _isListening = false;
  String _text = 'Press the mic and start speaking...';
  final TextEditingController _textController = TextEditingController();
  bool _showTextInput = false;

  @override
  void initState() {
    super.initState();
    _initSpeech();
  }

  void _initSpeech() async {
    bool available = await _speech.initialize(
      onStatus: (val) => debugPrint('onStatus: $val'),
      onError: (val) => debugPrint('onError: $val'),
    );
    if (!available) {
      setState(() {
        _showTextInput = true;
        _text = 'Speech recognition unavailable. Use text input.';
      });
    }
  }

  void _listen() async {
    if (!_isListening) {
      bool available = await _speech.initialize();
      if (available) {
        setState(() => _isListening = true);
        _speech.listen(
          onResult: (val) => setState(() {
            _text = val.recognizedWords;
            if (val.hasConfidenceRating && val.confidence > 0) {
              _processCommand(_text);
            }
          }),
        );
      }
    } else {
      setState(() => _isListening = false);
      _speech.stop();
    }
  }

  void _processCommand(String commandText) async {
    final devicesState = ref.read(devicesProvider);
    if (devicesState.value == null || devicesState.value!.isEmpty) {
      _showMessage("No devices available to control.");
      return;
    }

    final result = CommandParser.parse(commandText, devicesState.value!);
    _showMessage(result.message);

    if (result.device != null && result.command != null) {
      final dbService = ref.read(irDatabaseServiceProvider);
      final irService = ref.read(irServiceProvider);

      final pattern = dbService.getCommandPattern(
        result.device!.type,
        result.device!.brand,
        result.command!,
      );
      final freq = dbService.getFrequency(
        result.device!.type,
        result.device!.brand,
      );

      if (pattern != null) {
        await irService.transmit(freq, pattern);
      } else {
        _showMessage(
          "IR code not found for ${result.command} on ${result.device!.name}.",
        );
      }
    }

    Future.delayed(const Duration(seconds: 2), () {
      if (mounted) Navigator.pop(context);
    });
  }

  void _showMessage(String message) {
    if (mounted) {
      ScaffoldMessenger.of(
        context,
      ).showSnackBar(SnackBar(content: Text(message)));
    }
  }

  @override
  Widget build(BuildContext context) {
    return AlertDialog(
      title: const Text('Voice / Text Command'),
      content: Column(
        mainAxisSize: MainAxisSize.min,
        children: [
          if (!_showTextInput) ...[
            Text(_text),
            const SizedBox(height: 20),
            FloatingActionButton(
              onPressed: _listen,
              child: Icon(_isListening ? Icons.mic : Icons.mic_none),
            ),
            TextButton(
              onPressed: () => setState(() => _showTextInput = true),
              child: const Text('Use Text Input Instead'),
            ),
          ] else ...[
            TextField(
              controller: _textController,
              decoration: const InputDecoration(hintText: 'e.g., Turn on TV'),
              onSubmitted: (val) {
                _processCommand(val);
                Navigator.pop(context);
              },
            ),
            const SizedBox(height: 20),
            ElevatedButton(
              onPressed: () {
                _processCommand(_textController.text);
                Navigator.pop(context);
              },
              child: const Text('Execute'),
            ),
          ],
        ],
      ),
    );
  }
}
