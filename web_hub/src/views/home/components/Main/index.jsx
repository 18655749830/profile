import React, { memo, shallowEqual, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { fetchHomeDataAction } from '@/store/home'

import Wrap from './style'
const HomeMain = memo(() => {
  // dynamics
  const { dynamics } = useSelector((state) => ({
    dynamics: state.home.dynamics,
  }), shallowEqual)

  /** 派发异步的事件: 发送网络请求 */
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchHomeDataAction())
  }, [dispatch])

  return (
    <Wrap>
      {
        dynamics.map(item => (
          <div className='item'>
            <div className='name'>{item.user.name}</div>
            <div>{item.content}</div>
          </div>
        ))
      }

    </Wrap>
  )
})

export default HomeMain