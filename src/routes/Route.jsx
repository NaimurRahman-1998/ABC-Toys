import { createBrowserRouter } from "react-router-dom";
import LoginLayout from "../layout/LoginLayout";
import ToysLayout from "../layout/ToysLayout";
import DollsDetails from "../pages/home/DollsDetails";
import Home from "../pages/home/Home";
import Login from "../pages/SignUpLogin/Login";
import Signup from "../pages/SignUpLogin/Signup";
import AddToys from "../pages/Toys/AddToys";
import AllToys from "../pages/Toys/AllToys";
import MyToys from "../pages/Toys/MyToys";
import ToyDetails from "../pages/Toys/ToyDetails";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path: '/',
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
    {
        path: '/toys',
        element: <ToysLayout></ToysLayout> ,
        children: [
            {
                path: '/toys/:id',
                element: <PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>,
                loader: ({params})=> fetch(`http://localhost:5000/toyDetails/${params.id}`)
            },
            {
                path: '/toys/addToys',
                element: <PrivateRoute><AddToys></AddToys></PrivateRoute>
            },
            {
                path: '/toys/allToys',
                element: <AllToys></AllToys>,
            },
            {
                path: '/toys/myToys',
                element: <MyToys></MyToys>
            }
        ]
    }
]);

export default router