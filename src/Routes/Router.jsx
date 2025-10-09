import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../pages/Root/Root';
import Error404 from '../pages/Error/Error404';
import Home from '../pages/Home/Home';
import Loading from '../components/Loader/Loading';
import TrendCardDetails from '../pages/TrendCardDetails/TrendCardDetails';
import AllApp from '../pages/AllApp/AllApp';
import AppDetails from '../pages/AppDetails/AppDetails';


 export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error404></Error404>,
    children:[
      {
        index:true,
        path:"/",
        element:<Home></Home>
        
      },
      {
        path:"/home",
        element:<Home></Home>
      },
      {
        path:"/app",
        element:<AllApp></AllApp>,
      },
       
       {
        path:"/installation",
        element:<div>this is installation</div>
      },
      {
        path:'/TCDetails/:id',
        element: <TrendCardDetails></TrendCardDetails>,
        loader:()=>fetch('appData2.json'),
        hydrateFallbackElement:<Loading></Loading>
      },
      {
        path:'/CardDetails/:id',
        element: <AppDetails></AppDetails>,
        loader:()=>fetch('appData.json'),
        hydrateFallbackElement:<Loading></Loading>
      }
    ]
    



  },

]);