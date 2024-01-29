import React from 'react'
import { FlatList, Image, StyleSheet, View } from 'react-native'

const AlbumDetailsScreen: React.FC = () => {
  const photos = [
    { id: '1', uri: 'https://placekitten.com/200/200' },
    { id: '2', uri: 'https://placekitten.com/200/200' },
    { id: '3', uri: 'https://placekitten.com/200/200' },
    { id: '4', uri: 'https://placekitten.com/200/200' },
  ]

  return (
    <FlatList
      data={photos}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Image source={{ uri: item.uri }} style={styles.photo} />
        </View>
      )}
      numColumns={3}
      keyExtractor={(item, index) => item.id}
    />
  )
};

const styles = StyleSheet.create({
  item: {
    flex: 1,
    flexDirection: 'column',
    margin: 1,
  },
  photo: {
    width: '100%',
    height: 120,
  },
})

export default AlbumDetailsScreen
