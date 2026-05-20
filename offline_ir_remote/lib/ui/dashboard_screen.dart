import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import '../providers/providers.dart';
import 'add_device_screen.dart';
import 'device_control_screen.dart';
import 'test_ir_screen.dart';
import 'voice_command_dialog.dart';

class DashboardScreen extends ConsumerWidget {
  const DashboardScreen({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final hasIr = ref.watch(hasIrEmitterProvider);
    final devicesState = ref.watch(devicesProvider);

    return Scaffold(
      appBar: AppBar(
        title: const Text('My Devices'),
        actions: [
          IconButton(
            icon: const Icon(Icons.bug_report),
            onPressed: () {
              Navigator.push(
                context,
                MaterialPageRoute(builder: (_) => const TestIrScreen()),
              );
            },
          ),
        ],
      ),
      body: Column(
        children: [
          hasIr.when(
            data: (hasEmitter) => hasEmitter
                ? const SizedBox.shrink()
                : Container(
                    color: Colors.redAccent,
                    padding: const EdgeInsets.all(8),
                    child: const Row(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        Icon(Icons.warning, color: Colors.white),
                        SizedBox(width: 8),
                        Text(
                          'No IR Blaster detected. Controls disabled.',
                          style: TextStyle(color: Colors.white),
                        ),
                      ],
                    ),
                  ),
            loading: () => const LinearProgressIndicator(),
            error: (_, _) => const SizedBox.shrink(),
          ),
          Expanded(
            child: devicesState.when(
              data: (devices) {
                if (devices.isEmpty) {
                  return const Center(
                    child: Text('No devices added yet. Click + to add one.'),
                  );
                }
                return GridView.builder(
                  padding: const EdgeInsets.all(16),
                  gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
                    crossAxisCount: 2,
                    crossAxisSpacing: 16,
                    mainAxisSpacing: 16,
                  ),
                  itemCount: devices.length,
                  itemBuilder: (context, index) {
                    final device = devices[index];
                    return GestureDetector(
                      onTap: () {
                        Navigator.push(
                          context,
                          MaterialPageRoute(
                            builder: (_) => DeviceControlScreen(device: device),
                          ),
                        );
                      },
                      onLongPress: () {
                        _showDeleteDialog(context, ref, device.id);
                      },
                      child: Card(
                        elevation: 4,
                        shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(16),
                        ),
                        child: Column(
                          mainAxisAlignment: MainAxisAlignment.center,
                          children: [
                            Icon(
                              device.type.toLowerCase() == 'tv'
                                  ? Icons.tv
                                  : Icons.ac_unit,
                              size: 48,
                              color: Colors.blueAccent,
                            ),
                            const SizedBox(height: 8),
                            Text(
                              device.name,
                              style: const TextStyle(
                                fontWeight: FontWeight.bold,
                                fontSize: 16,
                              ),
                            ),
                            Text(
                              device.brand,
                              style: const TextStyle(color: Colors.grey),
                            ),
                          ],
                        ),
                      ),
                    );
                  },
                );
              },
              loading: () => const Center(child: CircularProgressIndicator()),
              error: (err, _) => Center(child: Text('Error: $err')),
            ),
          ),
        ],
      ),
      floatingActionButton: Column(
        mainAxisAlignment: MainAxisAlignment.end,
        children: [
          FloatingActionButton(
            heroTag: "voiceBtn",
            onPressed: () {
              showDialog(
                context: context,
                builder: (context) => const VoiceCommandDialog(),
              );
            },
            child: const Icon(Icons.mic),
          ),
          const SizedBox(height: 16),
          FloatingActionButton(
            heroTag: "addBtn",
            onPressed: () {
              Navigator.push(
                context,
                MaterialPageRoute(builder: (_) => const AddDeviceScreen()),
              );
            },
            child: const Icon(Icons.add),
          ),
        ],
      ),
    );
  }

  void _showDeleteDialog(BuildContext context, WidgetRef ref, String id) {
    showDialog(
      context: context,
      builder: (context) => AlertDialog(
        title: const Text('Delete Device?'),
        content: const Text('Are you sure you want to remove this device?'),
        actions: [
          TextButton(
            onPressed: () => Navigator.pop(context),
            child: const Text('Cancel'),
          ),
          TextButton(
            onPressed: () {
              ref.read(devicesProvider.notifier).removeDevice(id);
              Navigator.pop(context);
            },
            child: const Text('Delete', style: TextStyle(color: Colors.red)),
          ),
        ],
      ),
    );
  }
}
