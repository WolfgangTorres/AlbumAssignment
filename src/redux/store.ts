import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

// Import the individual slices
import usersReducer from './users.slice'
import albumsReducer from './albums.slice'
import photosReducer from './photos.slice'

// Combine reducers from different slices into a single root reducer
const rootReducer = combineReducers({
  users: usersReducer,
  albums: albumsReducer,
  photos: photosReducer,
})

// Configure the Redux store with the root reducer
export const store = configureStore({
  reducer: rootReducer,
})

// Define TypeScript types for the store's dispatch function and state
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

// Export the configured store as the default export of this module
export default store
