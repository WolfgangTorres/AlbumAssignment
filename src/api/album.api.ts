import { createAsyncThunk } from '@reduxjs/toolkit'
import api from './api'
import { Album } from '../utils/types'
import { RootState } from '../redux/store'

export const fetchAlbums = createAsyncThunk(
  'albums/fetchAlbums',
  async (userId: number, { getState }) => {
    const state: RootState = getState()
    const albums = state.albums.albumsByUserId[userId]
    // If albums for the given user ID already exist, return them instead of making an API call
    if (albums) {
      return albums
    }
    return await api<Album[]>({
      url: `/albums?userId=${userId}`,
      method: 'GET',
    })
  },
  {
    condition: (userId: number, { getState }) => {
      const state: RootState = getState()
      // Check if albums for this user are already available
      const albumsExist = !!state.albums.albumsByUserId[userId]
      // If albums exist, don't dispatch this action
      if (albumsExist) {
        return false
      }
    }
  }
)
