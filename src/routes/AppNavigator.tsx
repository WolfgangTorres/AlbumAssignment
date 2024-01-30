import React from 'react'
import { useColorScheme } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'

import AlbumStackNavigator from './AlbumStackNavigator'
import { DarkTheme, LightTheme } from '../utils/styles'

/**
 * AppNavigator
 *
 * This component wraps the entire navigation structure of the app. It utilizes the system's color scheme
 * settings to determine which theme to use for navigation elements.
 *
 * The `useColorScheme` hook is used to get the current color scheme (light or dark), and the navigation
 * container is then provided with the corresponding theme.
 *
 * `AlbumStackNavigator` is nested within `NavigationContainer` to handle the screen navigation for albums.
 */
const AppNavigator: React.FC = () => {
  // Determine if the device is set to dark mode
  const isDarkMode = useColorScheme() === 'dark'

  return (
    <NavigationContainer theme={isDarkMode ? DarkTheme : LightTheme}>
      <AlbumStackNavigator />
    </NavigationContainer>
  )
}

export default AppNavigator
