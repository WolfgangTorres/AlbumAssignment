import { createAsyncThunk } from '@reduxjs/toolkit'
import api from './api'
import { Photo } from '../utils/types'

export const fetchAlbumPhotos = createAsyncThunk(
  'photos/fetchAlbumPhotos',
  async (albumId: number) => {
    return await api<Photo[]>({
      url: `/photos?albumId=${albumId}`,
      method: 'GET',
    })
  },
)

export const fetchAllPhotos = createAsyncThunk(
  'photos/fetchAllPhotos',
  async () => {
    return await api<Photo[]>({
      url: '/photos',
      method: 'GET',
    })
  },
)
