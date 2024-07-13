// src/App.js
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  const router=createBrowserRouter(
    [{
     path: '/',
      element: <Home></Home>

    },
    {
    path: '/login',
      element: <Login></Login>

    },
    {
      path: '/Signup',
        element: <Signup></Signup>
  
      }
  ]
  )
  return (
    <RouterProvider router={router}>

    </RouterProvider>
  );
}

export default App;
