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
import OrderSuccess from "./component/Cart/OrderSuccess.js"

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


  return (
    <Router>
      <Header />
      {isAuthenticated && <UserOptions user={user} />}

{/* {stripeApiKey && (
  <Elements stripe={loadStripe(stripeApiKey)}>
    <ProtectedRoute exact path="/process/payment" component={Payment} />
  </Elements>
)} */}

      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<ProductDetails/>} />
      <Route path="/products" element={<Products/>} />
      <Route path="/products/:keyword" element={<Products/>} />
      <Route path="/search" element={<Search/>} />
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
      </Route>

      {stripeApiKey && (
      <Route path="/process/payment" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Elements stripe={loadStripe(stripeApiKey)}><Payment /></Elements></ProtectedRoute>} />
      )}

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

// {/* <Route path="/account" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Profile /></ProtectedRoute>} /> */}