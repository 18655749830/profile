import React, { memo, useState, useEffect } from 'react'

import { userListRequest } from '@/service'

const UserManager = memo(() => {

  const [userList, setUserList] = useState([])
  useEffect(() => {
    userListRequest().then(res => {
      console.log(res);
    })
  }, [])

  return (
    <div>

    </div>
  )
})

export default UserManager