import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import '../models/device_model.dart';
import '../providers/providers.dart';

class DeviceControlScreen extends ConsumerWidget {
  final DeviceModel device;

  const DeviceControlScreen({super.key, required this.device});

  void _sendCommand(WidgetRef ref, BuildContext context, String command) async {
    final dbService = ref.read(irDatabaseServiceProvider);
    final irService = ref.read(irServiceProvider);

    final pattern = dbService.getCommandPattern(
      device.type,
      device.brand,
      command,
    );
    final freq = dbService.getFrequency(device.type, device.brand);

    if (pattern != null) {
      final success = await irService.transmit(freq, pattern);
      if (!success && context.mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(
            content: Text(
              'Failed to send IR signal. Make sure device has IR blaster.',
            ),
          ),
        );
      }
    } else {
      if (context.mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(
            content: Text('Command $command not found for ${device.brand}'),
          ),
        );
      }
    }
  }

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final isTv = device.type.toLowerCase() == 'tv';

    return Scaffold(
      appBar: AppBar(title: Text(device.name)),
      body: Center(
        child: isTv
            ? _buildTvControls(ref, context)
            : _buildAcControls(ref, context),
      ),
    );
  }

  Widget _buildTvControls(WidgetRef ref, BuildContext context) {
    return Column(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        _buildControlButton(
          ref,
          context,
          'Power',
          Icons.power_settings_new,
          Colors.red,
          size: 80,
        ),
        const SizedBox(height: 40),
        Row(
          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
          children: [
            _buildControlButton(
              ref,
              context,
              'VolumeDown',
              Icons.volume_down,
              Colors.blue,
            ),
            _buildControlButton(
              ref,
              context,
              'VolumeUp',
              Icons.volume_up,
              Colors.blue,
            ),
          ],
        ),
      ],
    );
  }

  Widget _buildAcControls(WidgetRef ref, BuildContext context) {
    return Column(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        _buildControlButton(
          ref,
          context,
          'Power',
          Icons.power_settings_new,
          Colors.red,
          size: 80,
        ),
        const SizedBox(height: 40),
        Row(
          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
          children: [
            _buildControlButton(
              ref,
              context,
              'TempDown',
              Icons.arrow_downward,
              Colors.lightBlue,
            ),
            _buildControlButton(
              ref,
              context,
              'TempUp',
              Icons.arrow_upward,
              Colors.redAccent,
            ),
          ],
        ),
      ],
    );
  }

  Widget _buildControlButton(
    WidgetRef ref,
    BuildContext context,
    String command,
    IconData icon,
    Color color, {
    double size = 60,
  }) {
    return InkWell(
      onTap: () => _sendCommand(ref, context, command),
      borderRadius: BorderRadius.circular(size),
      child: Container(
        width: size,
        height: size,
        decoration: BoxDecoration(
          shape: BoxShape.circle,
          color: color.withValues(alpha: 0.2),
          border: Border.all(color: color, width: 2),
        ),
        child: Icon(icon, color: color, size: size * 0.5),
      ),
    );
  }
}
