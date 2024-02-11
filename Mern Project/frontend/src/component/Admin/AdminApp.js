// components/AdminDashboard.js
import React from 'react';

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import store from "../../store";
import { loadUser } from "../../actions/userAction";

import ProtectedRoute from "../Route/ProtectedRoute";
import Dashboard from "./Dashboard"
import ProductList from "./ProductList"
import NewProduct from "./NewProduct";
import UpdateProduct from "./UpdateProduct";
import OrderList from "./OrderList";
import ProcessOrder from "./ProcessOrder";
import UsersList from "./UsersList";
import UpdateUser from "./UpdateUser.js"
import ProductReviews from "./ProductReviews.js"

const MainDashboard = () => {
    const dispatch = useDispatch();
    const { isAuthenticated } = useSelector((state) => state.user);

    useEffect(() => {
    if(!isAuthenticated){
        dispatch(loadUser())
    }
      }, [dispatch, isAuthenticated]);


  return (
    <Router>
              <Routes>
        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated}/>}>
    <Route isAdmin={true} path="/admin/dashboard" element={<Dashboard/>}/>
      <Route path="/admin/products" isAdmin={true} element={<ProductList/>}/>
      <Route path="/admin/product" isAdmin={true} element={<NewProduct/>}/>
      <Route path="/admin/product/:id" isAdmin={true} element={<UpdateProduct/>}/>
      <Route path="/admin/orders" isAdmin={true} element={<OrderList/>}/>
      <Route path="/admin/order/:id" isAdmin={true} element={<ProcessOrder/>}/>
      <Route path="/admin/users" isAdmin={true} element={<UsersList/>}/>
      <Route path="/admin/user/:id" isAdmin={true} element={<UpdateUser/>}/>
      <Route path="/admin/reviews" isAdmin={true} element={<ProductReviews/>}/>
      </Route>
      </Routes>  
      </Router>

  );
};

export default MainDashboard;

