// src/App.js
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Problems from './components/Problems';
import Ide from './components/Ide';
import Leaderboard from './components/Leaderboard';
import Profile from './components/Profile';

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
      path: '/signup',
        element: <Signup></Signup>
  
      },
      {
        path: '/problems',
          element: <Problems></Problems>
    
        },
        {
          path: '/ide',
            element: <Ide></Ide>
      
          },
          {
            path: '/leaderboard',
              element: <Leaderboard></Leaderboard>
        
            },
            {
              path: '/profile',
                element: <Profile></Profile>
          
              }
  ]
  )
  return (
    <RouterProvider router={router}>

    </RouterProvider>
  );
}

export default App;
