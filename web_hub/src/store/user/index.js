import { loginRequest } from '@/service'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchLoginAction = createAsyncThunk("fetchdata", async (payload, { dispatch }) => {
  try {
    const loginResult = await loginRequest(payload)
    const temp = loginResult
    localStorage.setItem('userInfo', JSON.stringify(temp))
    localStorage.setItem('token', temp.token)
    if(payload.remember){
      localStorage.setItem('name', payload.name)
      localStorage.setItem('password', payload.password)
      localStorage.setItem('remember', payload.remember)
    }else{
      localStorage.removeItem('name')
      localStorage.removeItem('password')
    }
    dispatch(loginAction(temp))
  } catch (error) {
    console.log(error);
  }
})

const userSlice = createSlice({
  name: "user",
  initialState: {
   userInfo: {}
  },
  reducers: {
    loginAction(state, { payload }) {
      state.userInfo = payload
    },
    logoutAction(state){
      state.userInfo = {}
    }
  }
})

export const { 
  loginAction,
  logoutAction,
} = userSlice.actions

export default userSlice.reducer
