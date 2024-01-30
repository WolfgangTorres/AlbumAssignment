export interface Photo {
  url: string | undefined
  id: number
  albumId: number
  thumbnailUrl: string
}

export interface PhotosState {
  photosByAlbum: { [key: number]: Photo[] }
  allPhotos: Photo[]
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
  error: string | null | undefined
}
