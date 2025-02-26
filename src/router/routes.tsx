import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Auth/Login";
import SignUp from "../Pages/Auth/Sign-up";
import ForgotPassword from "../Pages/Auth/Forgot-password";
import Verification from "../Pages/Auth/Verification";
import ConfirmPassword from "../Pages/Auth/Confirm-Password";
import DashboardLayout from "../Pages/Dashboard/layout";
import AllProducts from "../Components/ProductsComponents/All-Products";
import ProductDetails from "../Components/ProductsComponents/ProductDetails";
import AboutUs from "../Pages/AboutUs/AboutUs";

export const router = createBrowserRouter([
  {
    path: "/auth/login",
    element: <Login />,
  },
  {
    path: "/auth/sign-up",
    element: <SignUp />,
  },
  {
    path: "/auth/forget-password",
    element: <ForgotPassword />,
  },
  {
    path: "/auth/varification",
    element: <Verification />,
  },
  {
    path: "/auth/confirm-password",
    element: <ConfirmPassword />,
  },
  {
    path: "/dashboard",
    element:<DashboardLayout/>
  },
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path:"/all-products",
        element:<AllProducts/>
      },
      {
        path:"/about-us",
        element:<AboutUs/>
      },
      {
        path:"/product-details",
        element:<ProductDetails/>
      }
    ],
  },
]);
