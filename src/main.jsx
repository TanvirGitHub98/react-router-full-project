import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import Home from './components/Home/Home';
import About from './components/About/About.jsx';
import Product from './components/Product/Product.jsx';
import Contact from './components/Contact/Contact.jsx';
import MoreInfo from './components/MoreInfo/MoreInfo.jsx';
import ConditionalStyle from './components/ConditionalStyle/ConditionalStyle.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <ConditionalStyle/>,
    errorElement: <ErrorPage/>,
    children:[
      {
        path:'/home',
        element:<Home/>
      },
      {
        path:'/about',
        element: <About/>
      },
      {
        path: '/product',
        loader: ()=> fetch('https://fakestoreapi.com/products'), 
        element :<Product/>
      },
      {
        path:'/Product/:ProductId',
        loader:({params})=> fetch(`https://fakestoreapi.com/products/${params.ProductId}`),
        element: <MoreInfo/>

      },
      {
        path:'/contact',
        element: <Contact/>
      }
    ]

  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
