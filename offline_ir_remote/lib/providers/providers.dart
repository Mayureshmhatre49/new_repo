import 'package:flutter_riverpod/flutter_riverpod.dart';
import '../models/device_model.dart';
import '../models/room_model.dart';
import '../repositories/db_helper.dart';
import '../services/ir_service.dart';
import '../services/ir_database_service.dart';

final irServiceProvider = Provider<IrService>((ref) {
  return IrService();
});

final irDatabaseServiceProvider = Provider<IrDatabaseService>((ref) {
  final service = IrDatabaseService();
  service.loadDatabase();
  return service;
});

final hasIrEmitterProvider = FutureProvider<bool>((ref) async {
  final irService = ref.read(irServiceProvider);
  return await irService.hasIrEmitter();
});

final roomsProvider = FutureProvider<List<RoomModel>>((ref) async {
  return await DBHelper.instance.getRooms();
});

final devicesProvider =
    AsyncNotifierProvider<DevicesNotifier, List<DeviceModel>>(() {
      return DevicesNotifier();
    });

class DevicesNotifier extends AsyncNotifier<List<DeviceModel>> {
  @override
  Future<List<DeviceModel>> build() async {
    return await DBHelper.instance.getDevices();
  }

  Future<void> loadDevices() async {
    state = const AsyncValue.loading();
    state = await AsyncValue.guard(() async {
      return await DBHelper.instance.getDevices();
    });
  }

  Future<void> addDevice(DeviceModel device) async {
    await DBHelper.instance.createDevice(device);
    await loadDevices();
  }

  Future<void> removeDevice(String id) async {
    await DBHelper.instance.deleteDevice(id);
    await loadDevices();
  }
}
