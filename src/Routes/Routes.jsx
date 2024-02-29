import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Pages/Home/Home";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login";
import ErrorPage from "../Pages/Error/ErrorPage";
import BestPackagesHomePage from "../Components/BestPackagesHomePage/BestPackagesHomePage";
import GalleryPage from "../Pages/GalleryPage/GalleryPage";
import CategoryWiseTour from "../Components/CategoryWiseTour/CategoryWiseTour";
import Booking from "../Components/Booking/Booking";
import ViewAllPackage from "../Components/Cards/ViewAllPackage/ViewAllPackage";
import TourDetails from "../Components/Cards/TourDetailsCard/TourDetails";
import DashboardPageHome from "../Pages/DashboardPageHome/DashboardPageHome";
import DashboardLayout from "../Layouts/Main/DashboardLayout/DashboardLayout";

export const routes = createBrowserRouter([
	{
		path: "/",
		element: <Main />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/home",
				element: <Home />,
			},
			{
				path: "/gallery",
				element: <GalleryPage />,
			},
			{
				path: "/signUp",
				element: <SignUp />,
			},
			{
				path: "/login",
				element: <Login />,
			},
			{
				path: "/tours",
				element: <BestPackagesHomePage />,
			},
			{
				path: "/tour-details/:id",
				element: <TourDetails />,
			},

			{
				path: "/tours/:category",
				element: <CategoryWiseTour />,
			},
			{
				path: "/viewall",
				element: <ViewAllPackage />,
			},
			{
				path: "/booking/:id",
				element: <Booking />,
			},
		],
	},
	// Dashboard Route
	{
		path: "/dashboard",
		element: <DashboardLayout />,
		children: [
			{
				path: "/dashboard",
				element: <DashboardPageHome />,
			},
		]
	},
	{
		path: "*",
		element: <ErrorPage />,
	},
]);
