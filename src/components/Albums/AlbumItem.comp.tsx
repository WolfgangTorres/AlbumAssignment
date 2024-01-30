/**
 * Album Item Component
 *
 * This component renders the row for the list of albums categorized by users.
 */
import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import { useNavigation, useTheme } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { AlbumItem, RootStackParamList } from '../../utils/interfaces'
import { StackNavigationProp } from '@react-navigation/stack'

const AlbumItemComponent: React.FC<{
  item: AlbumItem
  onDelete: (userId: number, albumId: number) => void
}> = ({ item, onDelete }) => {
  // Theme hooks
  const { colors } = useTheme()
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>()

  const albumOnPress = () => {
    navigation.navigate('AlbumDetails', { albumId: item.id })
  }

  // Call the onDelete function when the delete button is tapped
  const deleteOnPress = () => {
    onDelete(item.userId, item.id)
  }

  return (
    <TouchableOpacity
      style={[styles.item, { borderBottomColor: colors.border }]}
      onPress={albumOnPress}
    >
      <Icon name="album" size={25} color={colors.text} style={styles.icon} />
      <Text style={[styles.itemTitle, { color: colors.text }]}>
        {item.title}
      </Text>
      <TouchableOpacity onPress={deleteOnPress} style={styles.deleteButton}>
        <Icon name="delete-outline" size={25} color={colors.text} />
      </TouchableOpacity>
    </TouchableOpacity>
  )
}

// Styles for the component
const styles = StyleSheet.create({
  item: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    borderBottomWidth: 1,
  },
  itemTitle: {
    flex: 1,
    flexWrap: 'wrap',
    fontSize: 18,
    fontWeight: '400',
    marginRight: 10,
  },
  icon: {
    marginRight: 10,
  },
  deleteButton: {
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 40,
    borderRadius: 8,
  },
})

export default AlbumItemComponent
