import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import '../providers/providers.dart';

class TestIrScreen extends ConsumerStatefulWidget {
  const TestIrScreen({super.key});

  @override
  ConsumerState<TestIrScreen> createState() => _TestIrScreenState();
}

class _TestIrScreenState extends ConsumerState<TestIrScreen> {
  final _freqController = TextEditingController(text: '38000');
  final _patternController = TextEditingController();

  void _testTransmit() async {
    final irService = ref.read(irServiceProvider);

    try {
      final freq = int.parse(_freqController.text);
      final patternStr = _patternController.text.split(',');
      final pattern = patternStr.map((e) => int.parse(e.trim())).toList();

      final success = await irService.transmit(freq, pattern);
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(
            content: Text(success ? 'Signal sent' : 'Failed to send signal'),
          ),
        );
      }
    } catch (e) {
      if (mounted) {
        ScaffoldMessenger.of(
          context,
        ).showSnackBar(SnackBar(content: Text('Invalid input: $e')));
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('IR Test / Debug')),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          children: [
            TextField(
              controller: _freqController,
              keyboardType: TextInputType.number,
              decoration: const InputDecoration(labelText: 'Frequency (Hz)'),
            ),
            const SizedBox(height: 16),
            TextField(
              controller: _patternController,
              keyboardType: TextInputType.number,
              maxLines: 5,
              decoration: const InputDecoration(
                labelText: 'Raw Pattern (comma separated)',
                hintText: 'e.g., 9000, 4500, 560, 1690...',
              ),
            ),
            const SizedBox(height: 32),
            ElevatedButton(
              onPressed: _testTransmit,
              child: const Text('Transmit Test Signal'),
            ),
          ],
        ),
      ),
    );
  }
}
