import { getDynamicList } from '@/service'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchHomeDataAction = createAsyncThunk("fetchdata", (payload, { dispatch }) => {  
  getDynamicList().then(res => {
    dispatch(changeDynamics(res))
  })
})

const homeSlice = createSlice({
  name: "home",
  initialState: {
    dynamics: []
  },
  reducers: {
    changeDynamics(state, { payload }) {
      state.dynamics = payload
    },
  }
})

export const { 
  changeDynamics, 
} = homeSlice.actions

export default homeSlice.reducer
