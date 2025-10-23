import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import Services from "../Pages/Services";
import MyProfile from "../Pages/MyProfile";
import ServicesDetails from "../Pages/ServicesDetails";
import ErrorPage from "../Pages/ErrorPage";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AuthLayout from "../Layouts/AuthLayout";
import PrivateRoute from "../Provider/PrivateRoute";
let router = createBrowserRouter(
    [
        {
            path: "/",
            element: <HomeLayout></HomeLayout>,
            errorElement: <ErrorPage></ErrorPage>,
            children: [
                {
                    path: "",
                    element: <Home></Home>
                },
                {
                    path: "/services",
                    element: <Services></Services>

                },
                {
                    path: "/services/:serviceId",
                    element: <div className="bg-orange-50 w-11/12 mx-auto  py-15">
                        <PrivateRoute>
                            <ServicesDetails></ServicesDetails>
                        </PrivateRoute>
                    </div>
                    ,
                    loader: () => fetch("/petServices.json")
                },
            ]
        },
        {
            path: "/auth",
            element: <AuthLayout></AuthLayout>,
            children: [
                {
                    path: "/auth/login",
                    element: <Login></Login>
                },
                {
                    path: "/auth/register",
                    element: <Register></Register>
                },
            ]
        },
        {
            path: "/myProfile",
            element: <MyProfile></MyProfile>
        },
        {
            path: "/*",
            element: <h2>Error 404</h2>
        },
    ]
);

export default router; 