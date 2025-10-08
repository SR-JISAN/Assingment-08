import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../pages/Root/Root';
import Error404 from '../pages/Error/Error404';
import Home from '../pages/Home/Home';
import Loading from '../components/Loader/Loading';
import TrendCardDetails from '../pages/TrendCardDetails/TrendCardDetails';


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
        element:<div>this is app part</div>
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
      }
    ]
    



  },

]);