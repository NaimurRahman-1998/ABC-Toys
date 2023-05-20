import { createBrowserRouter } from "react-router-dom";
import LoginLayout from "../layout/LoginLayout";
import ToysLayout from "../layout/ToysLayout";
import ErrorElement from "../pages/ErrorElement";
import DollsDetails from "../pages/home/DollsDetails";
import Home from "../pages/home/Home";
import Login from "../pages/SignUpLogin/Login";
import Signup from "../pages/SignUpLogin/Signup";
import AddToys from "../pages/Toys/AddToys";
import AllToys from "../pages/Toys/AllToys";
import MyToys from "../pages/Toys/MyToys";
import ToyDetails from "../pages/Toys/ToyDetails";
import UpdateToys from "../pages/Toys/UpdateToys";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LoginLayout></LoginLayout>,
        errorElement: <ErrorElement></ErrorElement>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/dollDetails/:id',
                element: <PrivateRoute><DollsDetails></DollsDetails></PrivateRoute>,
                loader: ({params})=> fetch(`http://localhost:5000/categoryDolls/${params.id}`)
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
        errorElement: <ErrorElement></ErrorElement>,
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
            },
            {
                path: '/toys/updateToys/:id',
                element: <UpdateToys></UpdateToys>,
                loader: ({params})=> fetch(`http://localhost:5000/toyDetails/${params.id}`)
            }
        ]
    }
]);

export default router