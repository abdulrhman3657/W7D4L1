import { createBrowserRouter, RouterProvider, Outlet } from "react-router"
import Home from "../pages/Home"
import DisplayCard from "../components/DisplayCard"
import Navbar from "../components/Navbar"

const LayOut = () => {
  return(
    <>
        <Navbar/>
        <Outlet/>
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/", element: <LayOut/>,
      children: [
        {path: "/", element: <Home/>},
        {path: ":id", element: <DisplayCard/>},
      ]
  }
])

function Router() {
  return (
    <RouterProvider router={router}/>
  )
}

export default Router