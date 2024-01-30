import { createSlice } from '@reduxjs/toolkit'
import { PhotosState } from '../utils/interfaces'
import { fetchAlbumPhotos, fetchAllPhotos } from '../api/photo.api'

const initialState: PhotosState = {
  photosByAlbum: {},
  allPhotos: [],
  status: 'idle',
  error: null,
}

const photosSlice = createSlice({
  name: 'photos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Handle pending state for fetching album photos
      .addCase(fetchAlbumPhotos.pending, (state) => {
        state.status = 'loading'
      })
      // Handle fulfilled state for fetching album photos
      .addCase(fetchAlbumPhotos.fulfilled, (state, action) => {
        const albumId = action.meta.arg // Extracting albumId from the meta information
        state.photosByAlbum[albumId] = action.payload // Storing photos by albumId
        state.status = 'succeeded'
      })
      // Handle rejected state for fetching album photos
      .addCase(fetchAlbumPhotos.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      // Handle pending state for fetching all photos
      .addCase(fetchAllPhotos.pending, (state) => {
        state.status = 'loading'
      })
      // Handle fulfilled state for fetching all photos
      .addCase(fetchAllPhotos.fulfilled, (state, action) => {
        state.allPhotos = action.payload
        state.status = 'succeeded'
      })
      // Handle rejected state for fetching all photos
      .addCase(fetchAllPhotos.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  },
})

export default photosSlice.reducer
