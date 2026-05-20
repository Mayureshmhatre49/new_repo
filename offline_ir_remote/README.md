# Offline IR Remote

A Flutter Android MVP application for Offline Smart Home IR Control using mobile IR blaster support.

## Features (MVP)
* Send raw IR signals locally via the native Android ConsumerIrManager.
* Completely offline database: a local JSON file contains IR patterns for TV (Samsung, LG, Sony, Mi) and AC (LG, Daikin).
* Offline SQLite storage for managing devices and rooms.
* Fallback Voice / Text command system ("Turn on TV", "Increase TV volume") using the `speech_to_text` library.
* Debug IR testing screen for manually transmitting IR sequences by providing Frequency and Pattern lists.
* Riverpod state management for robust architectural scalability.

## Build Requirements
* Flutter SDK (`>=3.41.2`)
* Android device running Android 5.0 (API 21) or higher, with an integrated physical **IR Blaster** (e.g. Xiaomi, Poco, Redmi).

## Building the APK
To build the debug APK, run:
```bash
flutter pub get
flutter build apk --debug
```
The resulting APK will be generated at `build/app/outputs/flutter-apk/app-debug.apk`.

## Architecture Details
The project utilizes a modular clean architecture:
- `models`: Plain Dart models for Devices and Rooms.
- `repositories`: Local database helpers (SQLite via `sqflite`).
- `services`: Native channel communication for `ConsumerIrManager`, JSON parsing, and Natural Language mapping.
- `providers`: Riverpod providers.
- `ui`: Modern UI screens matching Flutter Material 3 guidelines.
