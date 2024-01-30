import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Album, AlbumsState } from '../utils/interfaces'
import { fetchAlbums } from '../api/album.api'

// Define the initial state of the albums module using the AlbumsState interface
const initialState: AlbumsState = {
  albumsByUserId: {}, // Stores albums indexed by user ID
  loadingUserIds: [], // Tracks loading state for each user
  status: 'idle', // Reflects the loading status of album data
  error: null, // Holds error information in case of a failed fetch
}

// Create a slice for the albums module with reducers and extra reducers for handling actions
const albumsSlice = createSlice({
  name: 'albums',
  initialState,
  reducers: {
    // Reducer for deleting an album from a specific user
    deleteAlbum: (
      state,
      action: PayloadAction<{ userId: number; albumId: number }>,
    ) => {
      const { userId, albumId } = action.payload
      // Filter out the deleted album by ID
      const filteredAlbums = state.albumsByUserId[userId].filter(
        (album: Album) => album.id !== albumId,
      )
      // Update the state with the filtered albums list
      state.albumsByUserId[userId] = filteredAlbums
    },
  },
  extraReducers: (builder) => {
    // Handle pending state when fetching albums
    builder
      .addCase(fetchAlbums.pending, (state, action) => {
        state.status = 'loading'
        // Add the user ID to the loading list to indicate a fetch in progress
        state.loadingUserIds.push(action.meta.arg)
      })
      // Handle fulfilled state when albums are successfully fetched
      .addCase(fetchAlbums.fulfilled, (state, action) => {
        state.status = 'succeeded'
        const userId = action.meta.arg
        // Cache the fetched albums by user ID in the state
        state.albumsByUserId[userId] = action.payload
        // Remove the user ID from the loading list as the fetch is complete
        state.loadingUserIds = state.loadingUserIds.filter(
          (id) => id !== userId,
        )
      })
      // Handle rejected state when an error occurs during the fetch
      .addCase(fetchAlbums.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
        const userId = action.meta.arg
        // Remove the user ID from the loading list due to the fetch failure
        state.loadingUserIds = state.loadingUserIds.filter(
          (id) => id !== userId,
        )
      })
  },
})

// Export the deleteAlbum reducer action for use within components
export const { deleteAlbum } = albumsSlice.actions

// Export the reducer as the default export of this module
export default albumsSlice.reducer
