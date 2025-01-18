import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Footer.css";

const Footer = ({user}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const productController = () =>{
    navigate("/products");
  }
  
  const showFooter = 
  !location.pathname.includes('/contact') && 
  !location.pathname.includes('/orders') && 
  !location.pathname.includes('/account') && 
  !location.pathname.includes('/login') && 
  !location.pathname.includes('/about') &&
  !location.pathname.startsWith("/me") &&
  !location.pathname.startsWith("/password/update") &&
  !location.pathname.startsWith("/admin");
  
  return (
    <>
    {showFooter  &&(
      <footer id="footer">
      <div className="main1" id="done">

      <div className="office row">
        <div className="footer-header">
          <h3>Office</h3>
        </div>
        <div className="office-des">
          <p>12 Sahed Bappi Sharoni Rd,Narayanganj</p>

          <a href="/contact">nandonik.lover2003@gmail.com</a>

          <p className="num">+880-1508934556</p>
        </div>
      </div>

      <div className="logo_brand row">
      <div className="logo-des">
          <p>We deliver othentic and orginal product. You can find all type of body product here.
          </p>
          {/* <h3>For you:</h3>
          <h3> First blive in yoursel, be confident and accept what youu are.</h3> */}

          <button onClick={productController} className="btn-know">See Products</button>
        </div>
      </div>

      <div className="link-des">
        <div className="footer-header">
            <h1>Nandonik</h1>
        </div>
          <a href="/" className="footer-links">Home</a>
          <a href="/products" className="footer-links">Products</a>
          <a href="/contact" className="footer-links">Contact</a>
          <a href="/about" className="footer-links">About</a>
          <a href="/account" className="footer-links">Profile</a>
        </div>
    
    </div>
    <div className="new_footer_top">
      <div className="footer_bg">
      </div>
    </div>


    <div className="copyright">

      <p>© Copyright 2023 Moury.</p>
    </div>
    </footer>
    )}
    </>
  );
};

export default Footer;