import { createBrowserRouter, RouterProvider } from "react-router-dom"

import "./App.css"

import { AppLayout } from "./components/Layout/AppLayout"

import { Home } from "./pages/Home"
import { About } from "./pages/About"
import { Country } from "./pages/Country"
import { Contact } from "./pages/Contact"
import { CountryDetails } from "./components/Layout/CountryDetails"

import { ErrorPage } from "./pages/ErrorPage"

const router= createBrowserRouter([
    {
      path:"/",
      element:<AppLayout />,
      errorElement:<ErrorPage/>,
      children:[
        {
          path:"/",
          element:< Home />
        },
        {
          path:"/about",
          element:<About />
        },
        {
          path:"country",
          element:<Country />
        },
        {
          path:"country/:id", //the : makes id dynamic root if it is not present then it is not take data dynamically
          element:<CountryDetails />
        },
        {
          path:"contact",
          element:<Contact />
        },
      ],
    },
]);
const App =() => {
  return<RouterProvider router={router}> </RouterProvider>
};

export default App;
