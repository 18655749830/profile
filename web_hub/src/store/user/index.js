import { createSlice } from '@reduxjs/toolkit'


const userSlice = createSlice({
  name: "user",
  initialState: {
   userInfo: {
    name: '刘抗冻',
    type: '1',
    avatarUrl: 'https://img1.baidu.com/it/u=3527010816,1804134246&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1703782800&t=e6eb0b76f6355c0278664168804969cd'
   }
  },
  reducers: {

  }
})

export default userSlice.reducer
