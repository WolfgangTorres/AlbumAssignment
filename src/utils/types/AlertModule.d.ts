import 'react-native'

export interface AlertModuleInterface {
  showAlert: (message: string) => Promise<void>
}

declare module 'react-native' {
  interface NativeModulesStatic {
    AlertModule: AlertModuleInterface
  }
}
