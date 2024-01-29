export interface Album {
  id: number
  userId: number
  title: string
}

export type AlbumItem = Album

export interface AlbumsState {
  albumsByUserId: { [key: number]: Album[] }
  loadingUserIds: number[]
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
  error: string | null | undefined
}
