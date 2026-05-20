import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:uuid/uuid.dart';
import '../models/device_model.dart';
import '../providers/providers.dart';

class AddDeviceScreen extends ConsumerStatefulWidget {
  const AddDeviceScreen({super.key});

  @override
  ConsumerState<AddDeviceScreen> createState() => _AddDeviceScreenState();
}

class _AddDeviceScreenState extends ConsumerState<AddDeviceScreen> {
  String? selectedType;
  String? selectedBrand;
  final nameController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    final dbService = ref.watch(irDatabaseServiceProvider);
    final types = dbService.getTypes();
    final brands = selectedType != null
        ? dbService.getBrands(selectedType!)
        : <String>[];

    return Scaffold(
      appBar: AppBar(title: const Text('Add Device')),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            DropdownButtonFormField<String>(
              decoration: const InputDecoration(labelText: 'Device Type'),
              value: selectedType,
              items: types.map((type) {
                return DropdownMenuItem<String>(
                  value: type,
                  child: Text(type.toUpperCase()),
                );
              }).toList(),
              onChanged: (val) {
                setState(() {
                  selectedType = val;
                  selectedBrand = null;
                });
              },
            ),
            const SizedBox(height: 16),
            DropdownButtonFormField<String>(
              decoration: const InputDecoration(labelText: 'Brand'),
              value: selectedBrand,
              items: brands.map((brand) {
                return DropdownMenuItem<String>(
                  value: brand,
                  child: Text(brand),
                );
              }).toList(),
              onChanged: (val) {
                setState(() {
                  selectedBrand = val;
                });
              },
            ),
            const SizedBox(height: 16),
            TextField(
              controller: nameController,
              decoration: const InputDecoration(
                labelText: 'Custom Name (e.g., Living Room TV)',
              ),
            ),
            const SizedBox(height: 32),
            ElevatedButton(
              onPressed: () {
                if (selectedType != null &&
                    selectedBrand != null &&
                    nameController.text.isNotEmpty) {
                  final device = DeviceModel(
                    id: const Uuid().v4(),
                    name: nameController.text,
                    type: selectedType!,
                    brand: selectedBrand!,
                    roomId: 'default_room',
                  );
                  ref.read(devicesProvider.notifier).addDevice(device);
                  Navigator.pop(context);
                } else {
                  ScaffoldMessenger.of(context).showSnackBar(
                    const SnackBar(content: Text('Please fill all fields')),
                  );
                }
              },
              child: const Text('Save Device'),
            ),
          ],
        ),
      ),
    );
  }
}
