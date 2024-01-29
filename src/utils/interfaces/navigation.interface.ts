export type RootStackParamList = {
  Albums: undefined // No parameters expected for UsersScreen
  AlbumDetails: { userId: number } // AlbumsScreen expects a parameter `userId`
}
