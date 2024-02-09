import React, { Fragment, useEffect } from "react";
import { FaMouse } from "react-icons/fa";
import "./Home.css";
// image
import Banner2 from "../../images/cover-5.jpg";
import Offer1 from "../../images/Offer1.jpg";
import Offer2 from "../../images/Offer2.gif";
import Offer3 from "../../images/Offer3.gif";
import category1 from "../../images/Category/k_beauty.jpg";
import category2 from "../../images/Category/man.jpg";
import category3 from "../../images/Category/Mother_Baby.jpg";
import category4 from "../../images/Category/woman-makeup.jpg";

import ProductCard from "./ProductCard.js";
import MetaData from "../layout/MetaData";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";

const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  // Provide default values for properties to avoid 'undefined'
  const { loading = false, error, products } = useSelector(
    (state) => state.products || {}
  );

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);

  return (
    <Fragment>
      {loading && <Loader />}
      {!loading && (
        <Fragment>
          <MetaData title="ECOMMERCE" />
         <div  className="home">
         <div className="banner">
            <p>Welcome to Ecommerce</p>
            <h1>FIND AMAZING PRODUCTS BELOW</h1>
            {/* <img src={Banner} alt="" /> */}
            <a href="#container">
              <button>
                Scroll <FaMouse />
              </button>
            </a>
          </div>

          <div className="GIF">
            <img src={Offer1} alt=""/>
            <img src={Offer2} alt=""/>
            <img src={Offer3} alt=""/>
          </div>

          <h2 className="homeHeading">Category</h2>
          <div class="secound-card">
            <div class="card-left">
              <img class="card-image" src={category1} alt=""/>
              <p class="card-text"> Mother & Baby care</p>
            </div>
            <div class="card-right">
              <img class="card-image" src={category2} alt=""/>
              <p class="card-text"> Man care</p>
            </div>
            <div class="card-right">
              <img class="card-image" src={category3} alt=""/>
              <p class="card-text"> K-beauty Product</p>
            </div>
            <div class="card-left">
              <img class="card-image" src={category4} alt=""/>
              <p class="card-text"> Mekup items</p>
            </div>
          </div>
          
          <h2 className="homeHeading">Featured Products</h2>
          <div className="container" id="container">
            {products && products.map((product) => <ProductCard key={product._id} product={product} />)}
          </div>
         </div>

         <div className="card-home">
          <img src={Banner2} alt="" />
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
