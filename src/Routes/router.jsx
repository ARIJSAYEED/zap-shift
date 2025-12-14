import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home/Home"
import AuthLayout from "../Layouts/AuthLayout";
import Loginform from "../Pages/Login/Loginform";
import Registerform from "../Pages/Register/Registerform";
import Services from "../Pages/Services/Services";
import Coverage from "../Pages/Coverage/Coverage";
import AboutUs from "../Pages/AboutUs/AboutUs";

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout></RootLayout>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path:'services',
                element:<Services></Services>
            },
            {
                path:'coverage',
                element:<Coverage></Coverage>
            },
            {
                path:'about-us',
                element:<AboutUs></AboutUs>
            }
        ]
    },
    {
        path: 'auth',
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: 'login',
                element: <Loginform></Loginform>
            },
            {
                path: 'register',
                element: <Registerform></Registerform>
            }
        ]
    }
])

export default router;