import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Login from './components/Login.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Register from './components/Register.jsx'
import Browse from './components/Browse.jsx'
import { Toaster } from 'react-hot-toast'
import { store } from './app/store.js';
import { Provider } from 'react-redux'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/browse",
    element: <Browse />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <Toaster />
      </RouterProvider>
    </Provider>
  </React.StrictMode>
)
