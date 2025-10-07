import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../pages/Root/Root';
import Error404 from '../pages/Error/Error404';


 export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error404></Error404>,
    children:[
      {
        index:true,
        path:"/",
      }
    ]
    



  },

]);