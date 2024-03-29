/**
 * Albums Screen
 *
 * This screen renders a list of albums categorized by users. It fetches and displays users and their albums
 * using a SectionList. It implements lazy loading of albums data when a user section is visible.
 */
import React, { useCallback, useEffect } from 'react'
import { SectionList, StyleSheet, ViewToken, NativeModules } from 'react-native'
import { useTheme } from '@react-navigation/native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { StackScreenProps } from '@react-navigation/stack'

import { EmptyListComponent, HeaderButton } from '../../components/shared'
import { RootState } from '../../redux/store'
import { fetchAlbums } from '../../api/album.api'
import { fetchUsers } from '../../api/user.api'
import { useAppDispatch, useAppSelector } from '../../utils/hooks'
import { AlbumItem, AlbumSectionHeader } from '../../components/Albums'
import { deleteAlbum } from '../../redux/albums.slice'
import { RootStackParamList } from '../../utils/types'

const { AlertModule } = NativeModules

const AlbumsScreen: React.FC<
  StackScreenProps<RootStackParamList, 'Albums'>
> = ({ navigation }) => {
  // Dispatch and theme hooks
  const dispatch = useAppDispatch()
  const { colors } = useTheme()
  const insets = useSafeAreaInsets()

  // Retrieve users and albums state from the Redux store
  const { users, status: usersStatus } = useAppSelector(
    (state: RootState) => state.users,
  )
  const {
    albumsByUserId,
    loadingUserIds,
    status: albumsStatus,
  } = useAppSelector((state: RootState) => state.albums)

  /**
   * headerRight
   *
   * The component to be rendered in the navigation header's right side. It toggles the native module.
   */
  const headerRight = useCallback(
    () => (
      <HeaderButton
        onPress={() => AlertModule.showAlert('This is a native alert!')}
        icon="circle-notifications"
      />
    ),
    [],
  )

  // Fetch users on component mount
  useEffect(() => {
    if (usersStatus === 'idle') {
      dispatch(fetchUsers())
    }
  }, [dispatch, usersStatus])

  // Use useEffect to set the options on the navigation header
  useEffect(() => {
    navigation.setOptions({
      headerRight: headerRight,
      headerTintColor: colors.text,
    })
  }, [navigation, headerRight, colors])

  /**
   * Callback for handling the visibility change of items in the SectionList.
   * It dispatches the fetchAlbums action when a user's section becomes visible
   * and the albums for that user are not already being fetched or loaded.
   */
  const onViewableItemsChanged = useCallback(
    ({ viewableItems }: { viewableItems: Array<ViewToken> }) => {
      viewableItems.forEach((viewableItem) => {
        const userId: number = viewableItem.item.userId

        const isAlreadyLoading =
          albumsByUserId[userId] || loadingUserIds.includes(userId)

        if (viewableItem.isViewable && !isAlreadyLoading) {
          dispatch(fetchAlbums(userId))
        }
      })
    },
    [dispatch, albumsByUserId, loadingUserIds],
  )

  const handleDeleteAlbum = (userId: number, albumId: number) => {
    dispatch(deleteAlbum({ userId, albumId }))
  }

  // Map users to sections for the SectionList
  const sections = users.map((user) => ({
    userId: user.id,
    title: user.name,
    data: albumsByUserId[user.id] || [], // Use cached albums if available
  }))

  return (
    <SectionList
      contentContainerStyle={{ paddingBottom: insets.bottom }}
      style={[styles.container, { backgroundColor: colors.background }]}
      showsVerticalScrollIndicator={false}
      sections={sections}
      keyExtractor={(item, index) => `${item?.userId}${index}`}
      renderItem={({ item }) => (
        <AlbumItem item={item} onDelete={handleDeleteAlbum} />
      )}
      renderSectionHeader={({ section }) => (
        <AlbumSectionHeader title={section.title} />
      )}
      onViewableItemsChanged={onViewableItemsChanged}
      viewabilityConfig={{ itemVisiblePercentThreshold: 50 }}
      ListEmptyComponent={
        <EmptyListComponent
          loading={usersStatus === 'loading' || albumsStatus === 'loading'}
          emptyMessage="No data found."
        />
      }
    />
  )
}

// Styles for the component
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default AlbumsScreen
