import { createBrowserRouter } from "react-router-dom";
import LoginLayout from "../layout/LoginLayout";
import DollsDetails from "../pages/home/DollsDetails";
import Home from "../pages/home/Home";
import Login from "../pages/SignUpLogin/Login";
import Signup from "../pages/SignUpLogin/Signup";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path: '/details/:id',
                element: <DollsDetails></DollsDetails>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            }
        ]
    },
]);

export default router