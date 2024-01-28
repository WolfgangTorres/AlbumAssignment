import { createSlice } from '@reduxjs/toolkit'
import { AlbumsState } from '../utils/interfaces'
import { fetchAlbums } from '../api/album.api'

const initialState: AlbumsState = {
  albums: [],
  status: 'idle',
  error: null,
}

const albumsSlice = createSlice({
  name: 'albums',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAlbums.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchAlbums.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.albums = action.payload
      })
      .addCase(fetchAlbums.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  },
})

export default albumsSlice.reducer
