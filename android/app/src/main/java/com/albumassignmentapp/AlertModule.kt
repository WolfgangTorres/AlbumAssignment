package com.albumassignmentapp

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import android.widget.Toast

class AlertModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String {
        return "AlertModule"
    }

    @ReactMethod
    fun showAlert(message: String) {
        Toast.makeText(reactApplicationContext, message, Toast.LENGTH_LONG).show()
    }
}