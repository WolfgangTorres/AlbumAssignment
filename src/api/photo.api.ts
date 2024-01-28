import { createAsyncThunk } from '@reduxjs/toolkit'
import api from './api'
import { Photo } from '../utils/interfaces'

export const fetchPhotos = createAsyncThunk(
  'photos/fetchPhotos',
  async (albumId: number) => {
    return await api<Photo[]>({
      url: `/photos?albumId=${albumId}`,
      method: 'GET',
    })
  },
)
