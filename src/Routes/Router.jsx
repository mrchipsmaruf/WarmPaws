import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import Services from "../Pages/Services";
import MyProfile from "../Pages/MyProfile";
import ServicesDetails from "../Pages/ServicesDetails";
let router = createBrowserRouter(
    [
        {
            path: "/",
            element: <HomeLayout></HomeLayout>,
            children: [
                {
                    path: "",
                    element: <Home></Home>
                },
                {
                    path: "/services/:serviceId",
                    element: <ServicesDetails></ServicesDetails>
                },
            ]
        },
        {
            path: "/auth",
            element: <h2>Authentication layout</h2>
        },
        {
            path: "/services",
            element: <Services></Services>

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