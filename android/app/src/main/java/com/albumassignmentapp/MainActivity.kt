package com.albumassignmentapp

import android.content.Intent
import android.os.Bundle
import android.os.Handler
import android.widget.LinearLayout
import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled
import com.facebook.react.defaults.DefaultReactActivityDelegate

class MainActivity : ReactActivity() {

  private lateinit var splashScreen: LinearLayout
  private val splashTimeOut: Long = 5000 // 3 sec

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  override fun getMainComponentName(): String = "AlbumAssignmentApp"

  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(null)

    // Inflate the splash screen layout
    splashScreen = layoutInflater.inflate(R.layout.splash_screen, null) as LinearLayout
    addContentView(splashScreen, LinearLayout.LayoutParams(LinearLayout.LayoutParams.MATCH_PARENT, LinearLayout.LayoutParams.MATCH_PARENT))

    Handler().postDelayed({
      // Start your app main activity
      this.hideSplashScreen()
    }, splashTimeOut)
  }

  fun hideSplashScreen() {
    runOnUiThread {
      // Remove the splash screen from view
      splashScreen.visibility = LinearLayout.GONE
    }
  }

  /**
   * Returns the instance of the [ReactActivityDelegate]. We use [DefaultReactActivityDelegate]
   * which allows you to enable New Architecture with a single boolean flags [fabricEnabled]
   */
  override fun createReactActivityDelegate(): ReactActivityDelegate =
      DefaultReactActivityDelegate(this, mainComponentName, fabricEnabled)
}
