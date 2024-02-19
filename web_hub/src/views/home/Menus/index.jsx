import React, { memo } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import Wrap from './style'
import Avatar from '@/assets/svg/default_avatar'


const LeftMenu = memo(() => {
  /** 从redux中获取数据 */
  const { userInfo } = useSelector((state) => ({
    userInfo: state.user.userInfo,
  }), shallowEqual)

  const items = [
    {
      label: userInfo.name,
      key: 'userName',
      path: '/userInfo',
      icon: userInfo.avatarUrl ? <img src={userInfo.avatarUrl} alt='' /> : <Avatar width={32} height={32} />
    },
    {
      label: '欢迎来到facebook',
      key: 'welcome',
      path: '/userInfo',
      icon: <img src='https://static.xx.fbcdn.net/rsrc.php/v3/yf/r/3kaEQoOorUi.png' alt='' />
    },
    {
      label: '用户列表',
      key: 'userList',
      isHidden: userInfo.type === 1,
      path: '/userInfo',
      icon: <Avatar width={32} height={32} />
    },
    {
      label: '标签列表',
      key: 'tagList',
      isHidden: userInfo.type === 1,
      path: '/userInfo',
      icon: <Avatar width={32} height={32} />
    },
  ]

  const onClick = (e) => {
    console.log('click ', e);
  };
  return (
    <Wrap>
      {
        items.map(item => (
          <li key={item.key}>
            { item.icon }
            <span className='ml10'>{item.label}</span>
          </li>
        ))
      }
    </Wrap>
  )
})

export default LeftMenu