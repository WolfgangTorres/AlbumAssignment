import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

import usersReducer from './users.slice'
import albumsReducer from './albums.slice'
import photosReducer from './photos.slice'

const rootReducer = combineReducers({
  users: usersReducer,
  albums: albumsReducer,
  photos: photosReducer,
})

export const store = configureStore({
  reducer: rootReducer,
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export default store
