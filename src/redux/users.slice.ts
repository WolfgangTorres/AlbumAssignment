import { createSlice } from '@reduxjs/toolkit'
import { UsersState } from '../utils/types'
import { fetchUsers } from '../api/user.api'

// Define the initial state of the users module with the UsersState type
const initialState: UsersState = {
  users: [], // Array to store the user data
  status: 'idle', // Reflects the loading status of user data
  error: null, // Holds error information in case of a failed fetch
}

// Create a slice for the users module with reducers to handle actions
const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Handle the pending state when fetching user data
      .addCase(fetchUsers.pending, (state) => {
        state.status = 'loading'
      })
      // Handle the fulfilled state when user data is successfully fetched
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = 'succeeded'
        // Directly store the array of users in the state
        state.users = action.payload
      })
      // Handle the rejected state when an error occurs during the fetch
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = 'failed'
        // Capture the error message in the state for potential error handling in the UI
        state.error = action.error.message
      })
  },
})

// Export the reducer as the default export of this module
export default usersSlice.reducer
