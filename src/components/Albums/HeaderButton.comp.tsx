/**
 * HeaderRight
 *
 * This component renders the star icon in the navigation header, allowing users to toggle between
 * viewing all photos and viewing photos from a specific album.
 */
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { useTheme } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/MaterialIcons'

const HeaderButton: React.FC<{ onPress: () => void; isStarred: boolean }> = ({
  onPress,
  isStarred,
}) => {
  const { colors } = useTheme()

  return (
    <TouchableOpacity onPress={onPress}>
      <Icon
        name={isStarred ? 'star' : 'star-border'}
        size={30}
        color={colors.text}
      />
    </TouchableOpacity>
  )
}

export default HeaderButton
