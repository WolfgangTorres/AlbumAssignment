import { createAsyncThunk } from '@reduxjs/toolkit'
import api from './api'
import { User } from '../utils/interfaces'

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  return await api<User[]>({ url: '/users', method: 'GET' })
})
