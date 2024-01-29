/**
 *
 *
 * @format
 */

import React from 'react'
import { StatusBar, useColorScheme } from 'react-native'
import { Provider } from 'react-redux'

import store from './src/redux/store'
import AppNavigator from './src/routes/AppNavigator'

const App = (): React.JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark'

  return (
    <Provider store={store}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppNavigator />
    </Provider>
  )
}

export default App
