import { configureStore } from '@reduxjs/toolkit'

import homeReducer from './home'

const store = configureStore({
  reducer: {
    home: homeReducer
  }
})

export default store
