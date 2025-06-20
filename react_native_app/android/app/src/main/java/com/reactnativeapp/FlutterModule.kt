package com.reactnativeapp

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.Promise
import android.content.Intent
import io.flutter.embedding.android.FlutterActivity

class FlutterModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
    
    override fun getName(): String = "FlutterModule"
    
    @ReactMethod
    fun openFlutterScreen(promise: Promise) {
        try {
            val intent = FlutterActivity.createDefaultIntent(currentActivity!!)
            currentActivity?.startActivity(intent)
            promise.resolve("Flutter screen opened successfully")
        } catch (e: Exception) {
            promise.reject("ERROR", "Failed to open Flutter screen: ${e.message}")
        }
    }
}