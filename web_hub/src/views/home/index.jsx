import React, { memo, useState, useEffect } from 'react'

import Menus from './components/Menus'
import RightMenus from './components/RightMenus'
import Main from './components/Main'
import Wrap from './style'
import AppHeader from "@/components/AppHeader"
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
      <div className='app_main'>
        <Menus />
        <Main />
        <RightMenus />
      </div>
    </Wrap>
  )
})

export default Home