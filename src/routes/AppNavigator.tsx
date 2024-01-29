import React from 'react'
import { useColorScheme } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'

import AlbumStackNavigator from './AlbumStackNavigator'
import { DarkTheme, LightTheme } from '../utils/styles'

const AppNavigator: React.FC = () => {
  const isDarkMode = useColorScheme() === 'dark'

  return (
    <NavigationContainer theme={isDarkMode ? DarkTheme : LightTheme}>
      <AlbumStackNavigator />
    </NavigationContainer>
  )
}

export default AppNavigator
