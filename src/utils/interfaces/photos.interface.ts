export interface Photo {
  id: number
  albumId: number
  thumbnailUrl: string
}

export interface PhotosState {
  photos: Photo[]
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
  error: string | null | undefined
}
