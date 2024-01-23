import React from "react";
import { useSelector } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({isAuthenticated, children,adminRoute,isAdmmin }) => {
    const {loading } = useSelector((state) => state.user);


    if (loading) {
        return <Loader />;
      }

    if (!isAuthenticated) {
    return <Navigate to={"/login"} />;}

if(adminRoute  && !isAdmmin){
    return <Navigate to={"/login"} />;}
      
return children ? children : <Outlet />;
};

export default ProtectedRoute;