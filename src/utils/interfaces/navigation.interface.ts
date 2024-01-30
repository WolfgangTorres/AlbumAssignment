export type RootStackParamList = {
  Albums: undefined // No parameters expected for UsersScreen
  AlbumDetails: { albumId: number } // AlbumsScreen expects a parameter `userId`
}
