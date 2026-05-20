import 'dart:convert';
import 'package:flutter/services.dart';

class IrDatabaseService {
  Map<String, dynamic> _database = {};

  Future<void> loadDatabase() async {
    final String response = await rootBundle.loadString(
      'assets/ir_database.json',
    );
    _database = await json.decode(response);
  }

  List<String> getTypes() {
    return _database.keys.toList();
  }

  List<String> getBrands(String type) {
    if (_database.containsKey(type)) {
      return _database[type].keys.toList();
    }
    return [];
  }

  Map<String, dynamic>? getBrandData(String type, String brand) {
    if (_database.containsKey(type) && _database[type].containsKey(brand)) {
      return _database[type][brand];
    }
    return null;
  }

  int getFrequency(String type, String brand) {
    final data = getBrandData(type, brand);
    return data?['frequency'] ?? 38000;
  }

  List<int>? getCommandPattern(String type, String brand, String command) {
    final data = getBrandData(type, brand);
    if (data != null && data['commands'].containsKey(command)) {
      return List<int>.from(data['commands'][command]);
    }
    return null;
  }
}
