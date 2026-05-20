import 'package:sqflite/sqflite.dart';
import 'package:path/path.dart';
import '../models/device_model.dart';
import '../models/room_model.dart';

class DBHelper {
  static final DBHelper instance = DBHelper._init();
  static Database? _database;

  DBHelper._init();

  Future<Database> get database async {
    if (_database != null) return _database!;
    _database = await _initDB('ir_remote.db');
    return _database!;
  }

  Future<Database> _initDB(String filePath) async {
    final dbPath = await getDatabasesPath();
    final path = join(dbPath, filePath);

    return await openDatabase(path, version: 1, onCreate: _createDB);
  }

  Future _createDB(Database db, int version) async {
    const idType = 'TEXT PRIMARY KEY';
    const textType = 'TEXT NOT NULL';

    await db.execute('''
CREATE TABLE rooms (
  id $idType,
  name $textType
)
''');

    await db.execute('''
CREATE TABLE devices (
  id $idType,
  name $textType,
  type $textType,
  brand $textType,
  roomId $textType,
  FOREIGN KEY (roomId) REFERENCES rooms (id) ON DELETE CASCADE
)
''');

    // Insert default room
    await db.insert('rooms', {'id': 'default_room', 'name': 'Living Room'});
  }

  Future<List<RoomModel>> getRooms() async {
    final db = await instance.database;
    final maps = await db.query('rooms');
    return maps.map((map) => RoomModel.fromMap(map)).toList();
  }

  Future<RoomModel> createRoom(RoomModel room) async {
    final db = await instance.database;
    await db.insert('rooms', room.toMap());
    return room;
  }

  Future<List<DeviceModel>> getDevices() async {
    final db = await instance.database;
    final maps = await db.query('devices');
    return maps.map((map) => DeviceModel.fromMap(map)).toList();
  }

  Future<DeviceModel> createDevice(DeviceModel device) async {
    final db = await instance.database;
    await db.insert('devices', device.toMap());
    return device;
  }

  Future<void> deleteDevice(String id) async {
    final db = await instance.database;
    await db.delete('devices', where: 'id = ?', whereArgs: [id]);
  }

  Future<void> close() async {
    final db = await instance.database;
    db.close();
  }
}
