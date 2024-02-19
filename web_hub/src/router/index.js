import React from "react";
import { Navigate } from 'react-router-dom'

const Main = React.lazy(() => import('@/views/main'))
const Home = React.lazy(() => import('@/views/home'))
const Login = React.lazy(() => import('@/views/login'))
const Subscriptions = React.lazy(() => import('@/views/subscriptions'))

const UserManager = React.lazy(() => import('@/views/userManager'))


const routes = [
  {
    path: '/home',
    element: <Home />,
    // element: <Navigate to="/home" />,
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/main',
    element: <Main />,
    children: [
      { path: '', element: <Navigate to="index" /> },
      { path: 'index', element:  <Home />},
      { path: 'subscriptions', element: <Subscriptions /> },
    ],
  },
  // {
  //   path: '/subscriptions',
  //   element: <Subscriptions />
  // },
  {
    path: '*',
    element: <div>404</div>
  },

]

export default routes
