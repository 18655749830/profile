import React, { memo } from 'react'

import Menus from './Menus'
import RightMenus from './RightMenus'
import Main from './Main'

const Home = memo(() => {
  return (
    <div>
      <div className='app_main'>
        <Menus />
        <Main />
        <RightMenus />
      </div>
    </div>
  )
})

export default Home