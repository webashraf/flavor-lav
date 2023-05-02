import { createBrowserRouter } from "react-router-dom"
import Home from "../Components/Home/Home"
import Main from "../Layout/Main"
import CheifDetails from "../Components/ChefDetails/CheifDetails"


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch("https://flavor-lav-server.vercel.app/chef")
            },
            {
                path: "details",
                element: <CheifDetails></CheifDetails>
            },
            {
                path: "blog",
                element: <div>Blog</div>
            },
            {
                path: "about",
                element: <div>About</div>
            }
        ]
    }
])

export { router }
