import React, { ComponentProps } from 'react'
import { TouchableOpacity } from 'react-native'
import { useTheme } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/MaterialIcons'

/**
 * HeaderRight
 *
 * This component renders the star icon in the navigation header, allowing users to toggle between
 * viewing all photos and viewing photos from a specific album.
 */
const HeaderButton: React.FC<{
  onPress: () => void
  icon: ComponentProps<typeof Icon>['name']
}> = ({ onPress, icon }) => {
  const { colors } = useTheme()

  return (
    <TouchableOpacity style={{ marginRight: 8 }} onPress={onPress}>
      <Icon name={icon} size={30} color={colors.text} />
    </TouchableOpacity>
  )
}

export default HeaderButton
