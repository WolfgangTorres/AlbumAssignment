import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import AlbumsScreen from '../screens/Albums/Albums.screen'
import AlbumDetailsScreen from '../screens/Albums/AlbumDetails.screen'
import { RootStackParamList } from '../utils/types'

// Create a Stack Navigator with a parameter list for type safety.
const Stack = createStackNavigator<RootStackParamList>()

/**
 * AlbumStackNavigator
 *
 * A navigator component that manages the stack navigation for the albums feature of the app.
 * It includes two screens: AlbumsScreen for displaying a list of albums, and AlbumDetailsScreen
 * for showing the details of a specific album.
 */
const AlbumStackNavigator: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Albums">
      <Stack.Screen name="Albums" component={AlbumsScreen} />
      <Stack.Screen name="AlbumDetails" component={AlbumDetailsScreen} />
    </Stack.Navigator>
  )
}

export default AlbumStackNavigator
