import React from "react";
// import { Navigate } from 'react-router-dom'

const Home = React.lazy(() => import('@/views/home'))
const Subscriptions = React.lazy(() => import('@/views/subscriptions'))

const routes = [
  {
    path: '/',
    element: <Home />,
    // element: <Navigate to="/home" />,
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/subscriptions',
    element: <Subscriptions />
  },

]

export default routes
