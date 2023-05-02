import { createBrowserRouter } from "react-router-dom"
import Home from "../Components/Home/Home"
import Main from "../Layout/Main"
import CheifDetails from "../Components/ChefDetails/CheifDetails"
import SignIn from "../Components/SignIn/SignIn"
import Register from "../Components/Register/Register"
import PrivateRoute from "../privateRoute/PrivateRoute"


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
                element: <PrivateRoute><CheifDetails></CheifDetails></PrivateRoute>
            },
            {
                path: "blog",
                element: <div>Blog</div>
            },
            {
                path: "about",
                element: <div>About</div>
            },
            {
                path: "signin",
                element: <SignIn></SignIn>
            },
            {
                path: "register",
                element:<Register></Register>
            }
        ]
    }
])

export { router }
