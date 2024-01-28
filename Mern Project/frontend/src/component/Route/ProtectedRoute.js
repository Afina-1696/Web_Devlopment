import React from "react";
import { useSelector } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({isAuthenticated, children,adminRoute,isAdmin }) => {
    const {loading } = useSelector((state) => state.user);


    if (loading) {
        return <Loader />;
      }

    if (isAuthenticated === false) {
    return <Navigate to={"/login"} />;}

if(adminRoute  && !isAdmin){
    return <Navigate to={"/login"} />;}
      
return children ? children : <Outlet />;
};

export default ProtectedRoute;