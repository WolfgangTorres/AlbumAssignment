export interface Album {
  id: number
  userId: number
  title: string
}

export interface AlbumsState {
  albums: Album[]
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
  error: string | null | undefined
}
