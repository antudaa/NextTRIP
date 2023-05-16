import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Pages/Home/Home";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login";
import ErrorPage from "../Pages/Error/ErrorPage";
import BestPackagesHomePage from "../Components/BestPackagesHomePage/BestPackagesHomePage";
import TourDetails from "../Components/Cards/EventTourCard/TourDetails";
import TourPackage from "../Components/Cards/TourPackage/TourPackage";
import GalleryPage from "../Pages/GalleryPage/GalleryPage";
import CategoryWiseTour from "../Components/CategoryWiseTour/CategoryWiseTour";
import Booking from "../Components/Booking/Booking";
import ViewAllPackageCard from "../Components/Cards/ViewAllPackage/ViewAllPackageCard";
import ViewAllPackage from "../Components/Cards/ViewAllPackage/ViewAllPackage";

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
                path: '/gallery',
                element: <GalleryPage />
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
                element: <BestPackagesHomePage />
            },
            {
                path: '/tour-details/:id',
                element: <TourDetails />,
            },
            {
                path: '/view-destination/:category',
                element: <TourPackage />
            },
            {
                path: '/tours/:category',
                element: <CategoryWiseTour />
            },
            {
                path: '/viewall',
                element: <ViewAllPackage></ViewAllPackage>
            },
            {
                path: '/booking',
                element: <Booking />
            },
        ]
    },
    {
        path: '*',
        element: <ErrorPage />
    }
])