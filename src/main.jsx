import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import DohSetup from './dohSetup.jsx'

const router = createBrowserRouter([
  {
  path:'agaaminAfricanHomePage/',
  element:<App />
  },
  {
    path:'agaaminAfricanHomePage/dohSetup',
    element:<DohSetup></DohSetup>
  }
   
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
