import { useRoutes } from "react-router-dom"
import routes from '@/router'
import { useDispatch } from 'react-redux'
import { loginAction } from '@/store/user'
import { useEffect } from 'react'



function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'))
    if (userInfo && userInfo.id) {
      dispatch(loginAction(userInfo))
    }
  }, [dispatch])
  return (
    <div className="App">
      {useRoutes(routes)}
      {/* <AppFooter /> */}
    </div>
  )
}

export default App
