import "./App.css";

// import Dashboard from "./component/Admin/Dashboard"
// import ProductList from "./component/Admin/ProductList"
// import NewProduct from "./component/Admin/NewProduct";
// import UpdateProduct from "./component/Admin/UpdateProduct";
// import OrderList from "./component/Admin/OrderList";
// import ProcessOrder from "./component/Admin/ProcessOrder";
// import UsersList from "./component/Admin/UsersList";
// import UpdateUser from "./component/Admin/UpdateUser.js"
// import ProductReviews from "./component/Admin/ProductReviews.js"

// import Category from "./component/Admin/Category";
// import NewCategory from "./component/Admin/NewCategory"
// import CategoryList from "./component/Admin/CategoryList"




// {/* <Route path="/account" element={<ProtectedRoute isAuthenticated={isAuthenticated}><Profile /></ProtectedRoute>} /> */}
import React, { useState, useEffect } from 'react';
import WebFont from "webfontloader";
import { useSelector } from "react-redux";
import store from "./store";
import AdminApp from './component/Admin/AdminApp';
import UserApp from './UserApp';
import { loadUser } from "./actions/userAction";

function App() {
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { isAuthenticated, user } = useSelector((state) => state.user);

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });

    store.dispatch(loadUser());
  }, []);

  return (
    <div>
      {/* {isAuthenticated && <UserOptions user={user} />} */}
      {isAuthenticated ? <AdminApp /> : <UserApp />}
    </div>
  );
}

export default App;
