class DeviceModel {
  final String id;
  final String name;
  final String type; // TV, AC, etc.
  final String brand;
  final String roomId;

  DeviceModel({
    required this.id,
    required this.name,
    required this.type,
    required this.brand,
    required this.roomId,
  });

  Map<String, dynamic> toMap() {
    return {
      'id': id,
      'name': name,
      'type': type,
      'brand': brand,
      'roomId': roomId,
    };
  }

  factory DeviceModel.fromMap(Map<String, dynamic> map) {
    return DeviceModel(
      id: map['id'],
      name: map['name'],
      type: map['type'],
      brand: map['brand'],
      roomId: map['roomId'],
    );
  }
}
