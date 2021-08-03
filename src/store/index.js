import { configureStore } from '@reduxjs/toolkit'
import authReducer from './auth'
import playlistReducer from './playlist'

export default configureStore({
  reducer: {
    auth: authReducer,
    playlist: playlistReducer,
  },
})
