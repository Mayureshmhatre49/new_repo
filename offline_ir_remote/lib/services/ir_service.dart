import 'package:flutter/services.dart';

class IrService {
  static const MethodChannel _channel = MethodChannel(
    'com.smartir.offline_ir_remote/ir',
  );

  Future<bool> hasIrEmitter() async {
    try {
      final bool result = await _channel.invokeMethod('hasIrEmitter');
      return result;
    } on PlatformException catch (_) {
      return false;
    }
  }

  Future<bool> transmit(int frequency, List<int> pattern) async {
    try {
      final bool result = await _channel.invokeMethod('transmit', {
        'frequency': frequency,
        'pattern': pattern,
      });
      return result;
    } on PlatformException catch (_) {
      return false;
    }
  }
}
