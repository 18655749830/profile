import { configureStore } from '@reduxjs/toolkit'

import homeReducer from './home'
import userReducer from './user'

const store = configureStore({
  reducer: {
    home: homeReducer,
    user: userReducer,
  }
})

export default store
