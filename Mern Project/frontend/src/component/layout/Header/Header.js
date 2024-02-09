import React from "react";
import {ReactNavbar} from "overlay-navbar"
import logo from "../../../images/logo0.png";
import {FaUserAlt} from "react-icons/fa";
import {FaSearch} from "react-icons/fa";
import {FaShoppingCart} from "react-icons/fa";

const Header = () => {
  return (
  <ReactNavbar
  burgerColor= "#381b12"
  burgerColorHover= "#eb4034"
  logo={logo}
  logoWidth= "20vmax"
  navColor1= "#ffd9b3"
  logoHoverSize= "10px"
  logoHoverColor="#eb4034"
  link1Text= "Home"
  link2Text= "Products"
  link3Text= "Contact"
  link4Text= "About"
  link1Url= "/"
  link2Url= "/products"
  link3Url= "/contact"
  link4Url= "/about"
  link1Size= "2.3vmax"
  link1Color= "#976b1d"
  nav1justifyContent= "flex-end"
  nav2justifyContent= "flex-end"
  nav3justifyContent= "flex-start"
  nav4justifyContent= "flex-start"
  link1ColorHover= "#7B2F15"
  link1Margin= "1vmax"
  profileIconUrl= "/login"
  profileIcon= {true}
  ProfileIconElement={FaUserAlt}
  profileIconColor= "black"
  searchIcon= {true}
  SearchIconElement={FaSearch}
  searchIconColor= "black"
  cartIconColor= "black"
  cartIcon= {true}
  CartIconElement={FaShoppingCart}
  profileIconColorHover= "#eb4034"
  searchIconColorHover= "#eb4034"
  cartIconColorHover= "#eb4034"
  cartIconMargin= "1vmax"
  profileIconMargin= "1vmax"
  searchIconMargin= "1vmax"
  />
  );
};

export default Header;


