import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import Services from "../Pages/Services";
import MyProfile from "../Pages/MyProfile";
import ServicesDetails from "../Pages/ServicesDetails";
import ErrorPage from "../Pages/ErrorPage";
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
                    element: <ServicesDetails></ServicesDetails>,
                    loader: () => fetch("/petServices.json")
                },
            ]
        },
        {
            path: "/auth",
            element: <h2>Authentication layout</h2>
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