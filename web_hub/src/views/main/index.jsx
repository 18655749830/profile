import React, { memo, useState, useEffect } from 'react'

import Wrap from './style'
import AppHeader from "@/components/AppHeader"
import { Outlet } from 'react-router-dom'
// import AppFooter from "@/components/AppFooter";

const Home = memo(() => {
  // const [highScore, setHighScore] = useState({})

  // // 网络请求的代码
  // useEffect(() => {
  //   request.get({ url: "/moment/list" }).then(res => {
  //     console.log(res)
  //     setHighScore(res)
  //   })
  // }, [])

  return (
    <Wrap>
      <AppHeader />
      <Outlet />
    </Wrap>
  )
})

export default Home