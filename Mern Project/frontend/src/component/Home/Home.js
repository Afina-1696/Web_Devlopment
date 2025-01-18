import React, { Fragment, useEffect } from "react";
import { FaMouse } from "react-icons/fa";
import "./Home.css";
// image
import ban1 from "../../images/Banner_image/tut1.jpg";
import ban2 from "../../images/Banner_image/tut2.jpg";
import ban3 from "../../images/Banner_image/tut3.jpg";
import ban4 from "../../images/Banner_image/tut4.jpg";
// import Banner2 from "../../images/cover-5.jpg";
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
import Carousel from "./Carousel.js";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const newPageController = () =>{
    navigate("/checker");
  }
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
         <div className="fade">
         <Carousel>
      <div>
        <img className="caro"
          src={ban1}
          alt="img1"
        />
      </div>
      <div>
        <img className="caro"
          src={ban2}
          alt="img2"
        />
      </div>
      <div>
        <img className="caro"
          src={ban3}
          alt="img3"
        />
      </div>
      <div>
        <img className="caro"
          src={ban4}
          alt="img4"
        />
      </div>
    </Carousel>
         
         </div>

            <p>Welcome to Nandonik</p>
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
          <div className="secound-card">
            <div className="card-left">
              <img className="card-image" src={category1} alt=""/>
              <p className="card-text"> Mother & Baby care</p>
            </div>
            <div className="card-right">
              <img className="card-image" src={category2} alt=""/>
              <p className="card-text"> Man care</p>
            </div>
            <div className="card-right">
              <img className="card-image" src={category3} alt=""/>
              <p className="card-text"> K-beauty Product</p>
            </div>
            <div className="card-left">
              <img className="card-image" src={category4} alt=""/>
              <p className="card-text"> Mekup items</p>
            </div>
          </div>
          
          <h2 className="homeHeading">Featured Products</h2>
          <div className="container" id="container">
            {products && products.map((product) => <ProductCard key={product._id} product={product} />)}
          </div>
         </div>

         <div className="card-home">
          <h2 className="joy">Want to check your </h2>
          <h2 className="joy">Foundation shade?</h2>
          {/* <img src={Banner2} alt="" /> */}
          <button onClick={newPageController} 
          className="foundation">Check it!</button>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
