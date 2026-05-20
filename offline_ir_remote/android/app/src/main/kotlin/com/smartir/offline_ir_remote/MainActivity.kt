package com.smartir.offline_ir_remote

import android.content.Context
import android.hardware.ConsumerIrManager
import android.os.Build
import io.flutter.embedding.android.FlutterActivity
import io.flutter.embedding.engine.FlutterEngine
import io.flutter.plugin.common.MethodChannel

class MainActivity : FlutterActivity() {
    private val CHANNEL = "com.smartir.offline_ir_remote/ir"

    override fun configureFlutterEngine(flutterEngine: FlutterEngine) {
        super.configureFlutterEngine(flutterEngine)
        MethodChannel(flutterEngine.dartExecutor.binaryMessenger, CHANNEL).setMethodCallHandler { call, result ->
            val irManager = getSystemService(Context.CONSUMER_IR_SERVICE) as? ConsumerIrManager

            when (call.method) {
                "hasIrEmitter" -> {
                    if (irManager != null && irManager.hasIrEmitter()) {
                        result.success(true)
                    } else {
                        result.success(false)
                    }
                }
                "getCarrierFrequencies" -> {
                    if (irManager != null && irManager.hasIrEmitter()) {
                        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.KITKAT) {
                            val freqs = irManager.carrierFrequencies
                            val freqList = ArrayList<Map<String, Int>>()
                            if (freqs != null) {
                                for (range in freqs) {
                                    val map = HashMap<String, Int>()
                                    map["min"] = range.minFrequency
                                    map["max"] = range.maxFrequency
                                    freqList.add(map)
                                }
                            }
                            result.success(freqList)
                        } else {
                            result.error("UNSUPPORTED", "Android version not supported", null)
                        }
                    } else {
                        result.error("NO_IR_EMITTER", "No IR emitter found", null)
                    }
                }
                "transmit" -> {
                    if (irManager != null && irManager.hasIrEmitter()) {
                        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.KITKAT) {
                            val frequency = call.argument<Int>("frequency")
                            val patternList = call.argument<List<Int>>("pattern")

                            if (frequency != null && patternList != null) {
                                val patternArray = IntArray(patternList.size)
                                for (i in patternList.indices) {
                                    patternArray[i] = patternList[i]
                                }
                                try {
                                    irManager.transmit(frequency, patternArray)
                                    result.success(true)
                                } catch (e: Exception) {
                                    result.error("TRANSMIT_FAILED", e.message, null)
                                }
                            } else {
                                result.error("INVALID_ARGUMENTS", "Frequency or pattern is null", null)
                            }
                        } else {
                            result.error("UNSUPPORTED", "Android version not supported", null)
                        }
                    } else {
                        result.error("NO_IR_EMITTER", "No IR emitter found", null)
                    }
                }
                else -> {
                    result.notImplemented()
                }
            }
        }
    }
}
