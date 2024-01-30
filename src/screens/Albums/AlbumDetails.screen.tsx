/**
 * AlbumDetailsScreen
 *
 * This screen displays a grid of photos either from a specific album or from all albums. Users can toggle between
 * viewing photos from a specific album and viewing all photos. The screen fetches photo data from an API and
 * renders it using a FlatList. Users can also see an indicator while photos are being loaded.
 */
import React, { useCallback, useEffect, useState } from 'react'
import { Dimensions, FlatList, Image, StyleSheet, View } from 'react-native'
import { useTheme } from '@react-navigation/native'
import { StackScreenProps } from '@react-navigation/stack'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { RootStackParamList } from '../../utils/interfaces'
import { RootState } from '../../redux/store'
import { fetchAlbumPhotos, fetchAllPhotos } from '../../api/photo.api'
import { useAppDispatch, useAppSelector } from '../../utils/hooks'
import { EmptyListComponent } from '../../components/shared'
import { HeaderButton } from '../../components/Albums'

const { width } = Dimensions.get('window')
const marginSize = 1
const photoSize = (width - marginSize * 2 * 3) / 3 // 3 items per row, margin on both sides

const AlbumDetailsScreen: React.FC<
  StackScreenProps<RootStackParamList, 'AlbumDetails'>
> = ({ route, navigation }) => {
  const { albumId } = route.params

  // useDispatch hook to dispatch actions to the Redux store
  const dispatch = useAppDispatch()
  const { colors } = useTheme()
  const insets = useSafeAreaInsets()

  // useSelector hook to access state from the Redux store
  const { photosByAlbum, allPhotos, status } = useAppSelector(
    (state: RootState) => state.photos,
  )

  // Local state to manage the toggling between album photos and all photos
  const [showAllPhotos, setShowAllPhotos] = useState(false)

  /**
   * headerRight
   *
   * The component to be rendered in the navigation header's right side. It toggles the state to show all photos
   * or only album-specific photos.
   */
  const headerRight = useCallback(
    () => (
      <HeaderButton
        onPress={() => setShowAllPhotos((prevState) => !prevState)}
        isStarred={showAllPhotos}
      />
    ),
    [showAllPhotos],
  )

  // Effect to fetch photos based on the albumId or fetch all photos
  useEffect(() => {
    if (albumId && !showAllPhotos) {
      dispatch(fetchAlbumPhotos(albumId)) // Fetch photos for a specific album
    } else {
      dispatch(fetchAllPhotos()) // Fetch all photos
    }
  }, [dispatch, albumId, showAllPhotos])

  // Use useEffect to set the options on the navigation header
  useEffect(() => {
    navigation.setOptions({
      title: showAllPhotos ? 'All Photos' : `Album ${albumId}`,
      headerRight: headerRight,
      headerTintColor: colors.text,
    })
  }, [navigation, showAllPhotos, albumId, headerRight, colors.text])

  /**
   * Preparing the data for the photo grid. If it's showing all photos, use allPhotos from the state; otherwise,
   * use photos from the specific album. Add empty items if necessary to ensure the layout of incomplete rows is consistent.
   */
  const photos = showAllPhotos ? allPhotos : photosByAlbum[albumId] || []
  // Calculate the number of empty items needed to fill the last row
  const totalItems = photos.length
  const itemsPerRow = 3
  const missingItems = totalItems % itemsPerRow
  const emptyItemsToAdd = missingItems !== 0 ? itemsPerRow - missingItems : 0

  // Create an array of empty items for padding
  const emptyItems = Array.from({ length: emptyItemsToAdd }, (_, index) => ({
    id: `empty-${index}`,
    thumbnailUrl: null,
  }))

  // Combine actual photos with empty items
  const photoData = [...photos, ...emptyItems]

  // Render loading indicator or the photo grid
  return (
    <FlatList
      contentContainerStyle={{ paddingBottom: insets.bottom }}
      style={[styles.container, { backgroundColor: colors.background }]}
      showsVerticalScrollIndicator={false}
      data={photoData}
      keyExtractor={(item, index) => `${item.id}${index}`}
      renderItem={({ item }) => {
        if (item.thumbnailUrl) {
          return (
            <View style={styles.item}>
              <Image source={{ uri: item.thumbnailUrl }} style={styles.photo} />
            </View>
          )
        }
        // Return an empty View for empty items
        return <View style={styles.item} />
      }}
      numColumns={3}
      ListEmptyComponent={
        <EmptyListComponent
          loading={status === 'loading'}
          emptyMessage="No data found."
        />
      }
    />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    flex: 1,
    flexDirection: 'column',
    margin: marginSize,
    width: photoSize,
  },
  photo: {
    width: '100%',
    height: photoSize,
  },
})

export default AlbumDetailsScreen
