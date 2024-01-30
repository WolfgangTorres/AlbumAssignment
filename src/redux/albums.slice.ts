import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Album, AlbumsState } from '../utils/interfaces'
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
  reducers: {
    deleteAlbum: (
      state,
      action: PayloadAction<{ userId: number; albumId: number }>,
    ) => {
      const { userId, albumId } = action.payload
      const filteredAlbums = state.albumsByUserId[userId].filter(
        (album: Album) => album.id !== albumId,
      )
      state.albumsByUserId[userId] = filteredAlbums
    },
  },
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

export const { deleteAlbum } = albumsSlice.actions
export default albumsSlice.reducer
