import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Pages/Home/Home";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login";
import ErrorPage from "../Pages/Error/ErrorPage";
import BestPackagesHomePage from "../Components/BestPackagesHomePage/BestPackagesHomePage";
import TourDetails from "../Components/Cards/EventTourCard/TourDetails";
import TourPackage from "../Components/Cards/TourPackage/TourPackage";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/home',
                element: <Home />
            },
            {
                path: '/signUp',
                element: <SignUp />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/tours',
                element: <BestPackagesHomePage/>
            },
            {
                path: '/tour-details/:id',
                element: <TourDetails/>
            },
            {
                path: '/productDetails/:category',
                element: <TourPackage/>
            },
        ]
    },
    {
        path: '*',
        element: <ErrorPage />
    }
])