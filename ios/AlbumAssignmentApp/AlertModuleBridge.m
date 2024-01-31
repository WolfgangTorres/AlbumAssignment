//
//  AlertModuleBridge.m
//  AlbumAssignmentApp
//
//  Created by Andres Torres on 30/01/24.
//

#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(AlertModule, NSObject)

RCT_EXTERN_METHOD(showAlert:(NSString *)message)

@end
