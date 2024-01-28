import { createAsyncThunk } from '@reduxjs/toolkit'
import api from './api'
import { Album } from '../utils/interfaces'

export const fetchAlbums = createAsyncThunk(
  'albums/fetchAlbums',
  async (userId: number) => {
    return await api<Album[]>({
      url: `/albums?userId=${userId}`,
      method: 'GET',
    })
  },
)
