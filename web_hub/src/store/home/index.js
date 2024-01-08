import { getDynamicList } from '@/service'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import dayjs from 'dayjs'

export const fetchHomeDataAction = createAsyncThunk("fetchdata", (payload, { dispatch }) => {  
  getDynamicList().then(res => {
    const temp = res.map(item => {
      item.createTime = dayjs(item.createTime).format('YYYY-MM-DD')
      return item
    })
    dispatch(changeDynamics(temp))
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
