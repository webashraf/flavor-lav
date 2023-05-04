import { createBrowserRouter } from "react-router-dom"
import Details from "../Components/ChefDetails/Details/Details"
import Home from "../Components/Home/Home"
import Register from "../Components/Register/Register"
import SignIn from "../Components/SignIn/SignIn"
import Main from "../Layout/Main"
import PrivateRoute from "../privateRoute/PrivateRoute"
import ErrorPage from "../Components/ErrorPage/ErrorPage"
import Blog from "../Components/Blog/Blog"


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
                path: "details/:cId",
                element: <PrivateRoute><Details></Details></PrivateRoute>,
                loader: async ({params}) => fetch(`https://flavor-lav-server.vercel.app/chef/${params.cId}`)
            },
            {
                path: "blog",
                element: <Blog></Blog>
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
        ],
        errorElement: <ErrorPage></ErrorPage>
    }
])

export { router }

