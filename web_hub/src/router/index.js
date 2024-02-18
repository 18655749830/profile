import React from "react";
// import { Navigate } from 'react-router-dom'

const Home = React.lazy(() => import('@/views/home'))
const Login = React.lazy(() => import('@/views/login'))
const Subscriptions = React.lazy(() => import('@/views/subscriptions'))

const UserManager = React.lazy(() => import('@/views/userManager'))


const routes = [
  {
    path: '/',
    element: <Home />,
    // element: <Navigate to="/home" />,
    children: [
      { path: 'userManager', element: <UserManager /> },
      // { path: 'contact', element: <Contact /> },
    ],
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/subscriptions',
    element: <Subscriptions />
  },
  {
    path: '*',
    element: <div>404</div>
  },

]

export default routes
