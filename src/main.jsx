import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Routes/Home/Home';
import Main from './Main/Main';
import About from './Routes/About/About';
import Destinations from './Routes/Destinations/Destinations';
import ErrorPage from './Error/ErrorPage';
import ContactUs from './Routes/ContactUs/ContactUs';
import Review from './Routes/Review/Review';
import AllTour from './Routes/Home/AllTour';
import AllTours from './Routes/AllTours/AllTours';
import Blog from './Routes/Blog/Blog';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement : <ErrorPage></ErrorPage>,
    children: [
    {
      path: '/',
      element: <Home></Home>
    },
    {
      path : 'about',
      element: <About></About>
    },
    {
      path : 'destinations',
      element: <Destinations></Destinations>
    },
    {
      path : 'contact',
      element: <ContactUs></ContactUs>
    },
    {
      path : 'review',
      element: <Review></Review>
    },
    {
      path : 'alltour',
      element: <AllTours></AllTours>
    },
    {
      path : 'blog',
      element: <Blog></Blog>
    }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
