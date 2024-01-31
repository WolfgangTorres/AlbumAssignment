//
//  AlertModule.swift
//  AlbumAssignmentApp
//
//  Created by Andres Torres on 30/01/24.
//
import Foundation
import UIKit

@objc(AlertModule)
class AlertModule: NSObject {
  
  // Expose this method to TS or JS
  @objc
  func showAlert(_ message: String) {
    DispatchQueue.main.async {
      let alert = UIAlertController(
        title: "Native Alert",
        message: message,
        preferredStyle: .alert)
      
      alert.addAction(
        UIAlertAction(
          title: "ok",
          style: .default,
          handler: nil)
      )
      
      // We need the rootViewController to present the alert
      if let rootVC = UIApplication.shared.keyWindow?.rootViewController {
        rootVC.present(alert, animated: true)
      }
    }
  }
  
  // Required for exporting the module
  @objc
  static func requiresMainQueueSetup() -> Bool {
    return true
  }
}
