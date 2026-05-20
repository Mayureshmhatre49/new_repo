import '../models/device_model.dart';

class CommandResult {
  final DeviceModel? device;
  final String? command;
  final String message;

  CommandResult(this.device, this.command, this.message);
}

class CommandParser {
  static CommandResult parse(String text, List<DeviceModel> devices) {
    text = text.toLowerCase();

    DeviceModel? targetDevice;
    for (var device in devices) {
      if (text.contains(device.name.toLowerCase()) ||
          text.contains(device.type.toLowerCase())) {
        targetDevice = device;
        break;
      }
    }

    if (targetDevice == null) {
      return CommandResult(
        null,
        null,
        "Could not identify a device in your command.",
      );
    }

    String? action;
    if (text.contains('on') || text.contains('start')) {
      action = 'Power';
    } else if (text.contains('off') || text.contains('stop')) {
      action = 'Power'; // Typically power toggles
    } else if (text.contains('increase') || text.contains('up')) {
      if (targetDevice.type.toLowerCase() == 'tv') {
        action = 'VolumeUp';
      } else if (targetDevice.type.toLowerCase() == 'ac') {
        action = 'TempUp';
      }
    } else if (text.contains('decrease') ||
        text.contains('down') ||
        text.contains('reduce')) {
      if (targetDevice.type.toLowerCase() == 'tv') {
        action = 'VolumeDown';
      } else if (targetDevice.type.toLowerCase() == 'ac') {
        action = 'TempDown';
      }
    }

    if (action == null) {
      return CommandResult(
        targetDevice,
        null,
        "Could not identify the action for ${targetDevice.name}.",
      );
    }

    return CommandResult(
      targetDevice,
      action,
      "Executing $action on ${targetDevice.name}",
    );
  }
}
