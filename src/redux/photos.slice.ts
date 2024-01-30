import { createSlice } from '@reduxjs/toolkit'
import { PhotosState } from '../utils/interfaces'
import { fetchAlbumPhotos, fetchAllPhotos } from '../api/photo.api'

// Define the initial state of the photos module using the PhotosState interface
const initialState: PhotosState = {
  photosByAlbum: {}, // Stores photos indexed by album ID
  allPhotos: [], // Array of all photos, regardless of album
  status: 'idle', // Reflects the loading status of photos data
  error: null, // Holds error information in case of a failed fetch
}

// Creates a slice for the photos module with reducers to handle actions
const photosSlice = createSlice({
  name: 'photos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Handle the pending state when fetching photos for a specific album
      .addCase(fetchAlbumPhotos.pending, (state) => {
        state.status = 'loading'
      })
      // Handle the fulfilled state when photos are successfully fetched for a specific album
      .addCase(fetchAlbumPhotos.fulfilled, (state, action) => {
        const albumId = action.meta.arg // Extracting albumId from the action meta
        // Storing the fetched photos indexed by the albumId
        state.photosByAlbum[albumId] = action.payload
        state.status = 'succeeded'
      })
      // Handle the rejected state when an error occurs during the fetch for a specific album
      .addCase(fetchAlbumPhotos.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      // Handle the pending state when fetching all photos
      .addCase(fetchAllPhotos.pending, (state) => {
        state.status = 'loading'
      })
      // Handle the fulfilled state when all photos are successfully fetched
      .addCase(fetchAllPhotos.fulfilled, (state, action) => {
        // Storing all the fetched photos
        state.allPhotos = action.payload
        state.status = 'succeeded'
      })
      // Handle the rejected state when an error occurs during the fetch for all photos
      .addCase(fetchAllPhotos.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  },
})

// Export the reducer as the default export of this module
export default photosSlice.reducer
