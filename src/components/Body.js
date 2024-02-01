import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Browse from './Browse';
import Login from './Login';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Login />
    },
    {
        path: '/browse',
        element: <Browse />
    }
])

const Body = () => {
  
  return (
    <RouterProvider router={router} />
  )
}

export default Body