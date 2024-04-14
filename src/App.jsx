import './App.css'
import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import Home from './routes/home.jsx';
import About from './routes/about.jsx';
import TopNavigation from "./components/TopNavigation.tsx";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "about",
        element: <About />
    }
]);

const App = () => {
  return (
      <div className="flex flex-col min-h-screen">
          <div className="w-full">
              <TopNavigation className="w-full"/>
          </div>
          <div className="mb-4"></div>
          <div className="flex-1 flex justify-center">
              <div className="md:w-3/4 lg:w-7/10">
                  <RouterProvider router={router}/>
              </div>
          </div>
      </div>
  );
};

export default App;
