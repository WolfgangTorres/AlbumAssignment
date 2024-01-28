/**
 *
 *
 * @format
 */

import React from 'react'
import { SafeAreaView, StatusBar, Text, useColorScheme } from 'react-native'
import { Provider } from 'react-redux'
import { Colors } from 'react-native/Libraries/NewAppScreen'

import store from './src/redux/store'

const App = (): React.JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark'

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  }

  return (
    <Provider store={store}>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <Text>Hello World!</Text>
      </SafeAreaView>
    </Provider>
  )
}

export default App
