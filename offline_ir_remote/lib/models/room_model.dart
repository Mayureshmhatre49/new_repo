class RoomModel {
  final String id;
  final String name;

  RoomModel({required this.id, required this.name});

  Map<String, dynamic> toMap() {
    return {'id': id, 'name': name};
  }

  factory RoomModel.fromMap(Map<String, dynamic> map) {
    return RoomModel(id: map['id'], name: map['name']);
  }
}
