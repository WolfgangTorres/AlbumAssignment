import { Album } from './albums.type'

export type RootStackParamList = {
  Albums: undefined // No parameters expected for UsersScreen
  AlbumDetails: { album: Album } // AlbumsScreen expects a parameter `userId`
}
