import { createBrowserRouter, Navigate } from "react-router";
import  { AboutPages } from "../pages/about/AboutPages";
import { ProfilePage } from "../pages/profile/ProfilePage";
import { LoginPage } from "../pages/auth/LoginPage";
import { PrivateRoute } from "./PrivateRoute";

export const Approuter = createBrowserRouter([
  {
    path: "/",
    element: <AboutPages/>,

  },
  {
    path: "/profile",
    element: <PrivateRoute element={<ProfilePage/>}/>,
    
  },
  {
    path: "/login",
    element: <LoginPage/>,
  },
  {
    path: '*',
    element: <Navigate to="/"/> //Navigate permite redireccionar, y le pasamos mel path 
  },
]);