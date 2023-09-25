import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './component/Root';
import Home from './component/Home';
import Donation from './component/Donation';
import Detail from './component/Detail';
import Statices from './component/Statices';
import ErrorPage from './component/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[

      {
        path:'/',
        element:<Home></Home>,
        loader:()=>fetch('/donated.json')
      },
      {
        path:'/details/:id',
        element:<Detail></Detail>,
        loader:()=>fetch('/donated.json')
      },
      {
        path:'/statistics',
        element:<Statices></Statices>
      },
      {
        path:'/donations',
        element:<Donation></Donation>, 
        loader:()=>fetch('/donated.json')
      }
    ]
  },
]);











ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
