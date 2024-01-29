import { createSlice } from '@reduxjs/toolkit'
import { AlbumsState } from '../utils/interfaces'
import { fetchAlbums } from '../api/album.api'

const initialState: AlbumsState = {
  albumsByUserId: {},
  loadingUserIds: [], // To track loading state per user
  status: 'idle',
  error: null,
}

const albumsSlice = createSlice({
  name: 'albums',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAlbums.pending, (state, action) => {
        state.status = 'loading'
        state.loadingUserIds.push(action.meta.arg)
      })
      .addCase(fetchAlbums.fulfilled, (state, action) => {
        state.status = 'succeeded'

        const userId = action.meta.arg // Get the userId from the action meta
        state.albumsByUserId[userId] = action.payload // Cache albums by userId
        state.loadingUserIds = state.loadingUserIds.filter(
          (id) => id !== userId,
        )
      })
      .addCase(fetchAlbums.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message

        const userId = action.meta.arg
        state.loadingUserIds = state.loadingUserIds.filter(
          (id) => id !== userId,
        )
      })
  },
})

export default albumsSlice.reducer
