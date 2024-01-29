import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import AlbumsScreen from '../screens/Albums/Albums.screen'
import AlbumDetailsScreen from '../screens/Albums/AlbumDetails.screen'
import { RootStackParamList } from '../utils/interfaces'

const Stack = createStackNavigator<RootStackParamList>()

const AlbumStackNavigator: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Albums">
      <Stack.Screen name="Albums" component={AlbumsScreen} />
      <Stack.Screen name="AlbumDetails" component={AlbumDetailsScreen} />
    </Stack.Navigator>
  )
}

export default AlbumStackNavigator
