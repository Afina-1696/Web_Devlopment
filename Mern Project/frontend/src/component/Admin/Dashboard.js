import React, { Fragment, useEffect } from "react";
import Sidebar from "./Sidebar.js";
import "./dashboard.css";
import Loader from "../layout/Loader/Loader";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Doughnut, Line } from "react-chartjs-2";
import Chart from 'chart.js/auto'; // Import Chart from chart.js
import { CategoryScale, LinearScale, ArcElement } from 'chart.js';
import { useSelector, useDispatch } from "react-redux";
import { getAdminProduct } from "../../actions/productAction";
import { getAllOrders } from "../../actions/orderAction.js";
import { getAllUsers } from "../../actions/userAction.js";
// import { getCategories } from "../../actions/categoryAction.js"

import icon1  from "../../images/Dashboard_icon/pic1.png";
import MetaData from "../layout/MetaData";

Chart.register(CategoryScale, LinearScale, ArcElement);


const Dashboard = () => {
  const dispatch = useDispatch();

  const { products, loading} = useSelector((state) => state.products);

  const { orders } = useSelector((state) => state.allOrders);

  const { users } = useSelector((state) => state.allUsers);

  // const { category } = useSelector((state) => state.category);

  let outOfStock = 0;

  products &&
    products.forEach((item) => {
      if (item.Stock === 0) {
        outOfStock += 1;
      }
    });

  useEffect(() => {
    dispatch(getAdminProduct());
    dispatch(getAllOrders());
    dispatch(getAllUsers());
    // dispatch(getCategories());
  }, [dispatch]);

  let totalAmount = 0;
  orders &&
    orders.forEach((item) => {
      totalAmount += item.totalPrice;
    });

const lineState = {
    labels: ["Initial Amount", "Amount Earned"],
    datasets: [
      {
        label: "TOTAL AMOUNT",
        backgroundColor: ["#f0b357"],
        hoverBackgroundColor: ["rgb(197, 72, 49)"],
        data: [0, totalAmount],
      },
    ],
    options: {
      scales: {
        x: {
          type: 'category',
          labels: ["Initial Amount", "Amount Earned"],
        },
        y: {
          beginAtZero: true,
        },
      },
    },
  };
  
  const doughnutState = {
    labels: ["Out of Stock", "InStock"],
    datasets: [
      {
        backgroundColor: ["#00A6B4", "#6800B4"],
        hoverBackgroundColor: ["#4B5000", "#35014F"],
        data: [outOfStock, products.length - outOfStock],
      },
    ],
    options: {
      scales: {
        x: {
          type: 'category',
          labels: ["Out of Stock", "InStock"],
        },
        y: {
          beginAtZero: true,
        },
      },
    },
  };
  

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
           <div className="dashboard">
      <MetaData title="Dashboard - Admin Panel" />
      <Sidebar />
      {/* <div className="sidebar1"></div> */}

      <div className="dashboardContainer">
        <Typography component="h1">Admin Dashboard</Typography>

        <div className="dashboardSummary">
          <div>
            <p>
              <img  className="maro" src={icon1}  alt="" />
              Total Amount <br /> ৳{totalAmount}
            </p>
          </div>
          <div className="dashboardSummaryBox2">
            <Link to="/admin/products">
              <p>Product</p>
              <p>{products && products.length}</p>
            </Link>
            <Link to="/admin/orders">
              <p>Orders</p>
              <p>{orders && orders.length}</p>
            </Link>
            <Link to="/admin/users">
              <p>Users</p>
              <p>{users && users.length}</p>
            </Link>
          {/* <Link to="/admin/category">
            <p>Category</p>
            <p>{category && category.length}</p>
            </Link> */}
          </div>
        </div>

        <div className="chart">
        <div className="lineChart">
          <Line data={lineState} />
        </div>

        <div className="doughnutChart">
          <Doughnut data={doughnutState} />
        </div>
        </div>
      </div>
    </div>
    
        </Fragment>
      )}
    </Fragment>
    
     
  );
};

export default Dashboard;