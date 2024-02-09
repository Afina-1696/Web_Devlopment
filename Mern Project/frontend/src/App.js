import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./component/layout/Header/Header.js";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import WebFont from "webfontloader";
import React from "react";
import Footer from "./component/layout/Footer/Footer.js"
import Home from "./component/Home/Home.js"
import ProductDetails from "./component/Product/ProductDetails.js";
import Products from "./component/Product/Products.js"
import Search from "./component/Product/Search.js"
import LoginSignUp from "./component/User/LoginSignUp";
import store from "./store";
import { loadUser } from "./actions/userAction";
import UserOptions from "./component/layout/Header/UserOptions";
import { useSelector } from "react-redux";
import Profile from "./component/User/Profile.js";
import ProtectedRoute from "./component/Route/ProtectedRoute";
import UpdateProfile from "./component/User/UpdateProfile";
import UpdatePassword from "./component/User/UpdatePassword";
import ForgotPassword from "./component/User/ForgotPassword";
import ResetPassword from "./component/User/ResetPassword";
import Cart from "./component/Cart/Cart"
import Shipping from "./component/Cart/Shipping"
import ConfirmOrder from "./component/Cart/ConfirmOrder"
import Payment from "./component/Cart/Payment"
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import OrderSuccess from "./component/Cart/OrderSuccess"
import MyOrders from "./component/Order/MyOrders"
import OrderDetails from "./component/Order/OrderDetails"
import Dashboard from "./component/Admin/Dashboard"
import ProductList from "./component/Admin/ProductList"
import NewProduct from "./component/Admin/NewProduct";
import UpdateProduct from "./component/Admin/UpdateProduct";
import OrderList from "./component/Admin/OrderList";
import ProcessOrder from "./component/Admin/ProcessOrder";
import UsersList from "./component/Admin/UsersList";
import UpdateUser from "./component/Admin/UpdateUser.js"
import ProductReviews from "./component/Admin/ProductReviews.js"
import Contact from "./component/layout/Contact/Contact";
import About from "./component/layout/About/About";
import NotFound from "./component/layout/Not Found/NotFound.js";
// import Category from "./component/Admin/Category";
// import NewCategory from "./component/Admin/NewCategory"
// import CategoryList from "./component/Admin/CategoryList"

function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);

  const [stripeApiKey, setStripeApiKey] = useState("");

  async function getStripeApiKey() {
    const { data } = await axios.get("/api/v1/stripeapikey");

    setStripeApiKey(data.stripeApiKey);
  }

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });

    store.dispatch(loadUser());
    getStripeApiKey();
  }, []);

  // window.addEventListener("contextmenu", (e) => e.preventDefault());
  
  return (
    <Router>
      <Header />
      {isAuthenticated && <UserOptions user={user} />}

      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<ProductDetails/>} />
      <Route path="/products" element={<Products/>} />
      <Route path="/products/:keyword" element={<Products/>} />
      <Route path="/search" element={<Search/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/login" element={<LoginSignUp/>} />
      <Route path="/password/forgot" element={<ForgotPassword/>}/>
      <Route path="/password/reset/:token" element={<ResetPassword/>}/>
      <Route path="/cart" element={<Cart/>}/>

      <Route element={<ProtectedRoute isAuthenticated={isAuthenticated}/>}>
      <Route path="/account" element={<Profile/>}/>
      <Route path="/me/update" element={<UpdateProfile/>}/>
      <Route path="/password/update" element={<UpdatePassword/>}/>
      <Route path="/shipping" element={<Shipping/>}/>
      <Route path="/order/confirm" element={<ConfirmOrder/>}/>
      <Route path="/success" element={<OrderSuccess/>}/>
      <Route path="/orders" element={<MyOrders/>}/>
      <Route path="/order/:id" element={<OrderDetails/>}/>
      <Route isAdmin={true} path="/admin/dashboard" element={<Dashboard/>}/>
      <Route path="/admin/products" isAdmin={true} element={<ProductList/>}/>
      <Route path="/admin/product" isAdmin={true} element={<NewProduct/>}/>
      <Route path="/admin/product/:id" isAdmin={true} element={<UpdateProduct/>}/>
      <Route path="/admin/orders" isAdmin={true} element={<OrderList/>}/>
      <Route path="/admin/order/:id" isAdmin={true} element={<ProcessOrder/>}/>
      <Route path="/admin/users" isAdmin={true} element={<UsersList/>}/>
      <Route path="/admin/user/:id" isAdmin={true} element={<UpdateUser/>}/>
      <Route path="/admin/reviews" isAdmin={true} element={<ProductReviews/>}/>
      {/* <Route path="/admin/category" isAdmin={true} element={<NewCategory/>}/>
      <Route path="/admin/categorylist" isAdmin={true} element={<CategoryList/>}/> */}
      </Route>

      {stripeApiKey && (
      <Route path="/process/payment" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Elements stripe={loadStripe(stripeApiKey)}><Payment /></Elements></ProtectedRoute>} />
      )}

      <Route path="*" element={<NotFound />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

// {/* <Route path="/account" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Profile /></ProtectedRoute>} /> */}