import { createSlice } from '@reduxjs/toolkit'
import { PhotosState } from '../utils/interfaces'
import { fetchPhotos } from '../api/photo.api'

const initialState: PhotosState = {
  photos: [],
  status: 'idle',
  error: null,
}

const photosSlice = createSlice({
  name: 'photos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPhotos.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchPhotos.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.photos = action.payload
      })
      .addCase(fetchPhotos.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  },
})

export default photosSlice.reducer
