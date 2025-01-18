// import React from "react";
// import {ReactNavbar} from "overlay-navbar"
// import logo from "../../../images/logo0.png";
// import {FaUserAlt} from "react-icons/fa";
// import {FaSearch} from "react-icons/fa";
// import {FaShoppingCart} from "react-icons/fa";

// const Header = () => {
//   return (
//   <ReactNavbar
//   burgerColor= "#381b12"
//   burgerColorHover= "#eb4034"
//   logo={logo}
//   logoWidth= "20vmax"
//   navColor1= "#ffd9b3"
//   logoHoverSize= "10px"
//   logoHoverColor="#eb4034"
//   link1Text= "Home"
//   link2Text= "Products"
//   link3Text= "Contact"
//   link4Text= "About"
//   link1Url= "/"
//   link2Url= "/products"
//   link3Url= "/contact"
//   link4Url= "/about"
//   link1Size= "2.3vmax"
//   link1Color= "#976b1d"
//   nav1justifyContent= "flex-end"
//   nav2justifyContent= "flex-end"
//   nav3justifyContent= "flex-start"
//   nav4justifyContent= "flex-start"
//   link1ColorHover= "#7B2F15"
//   link1Margin= "1vmax"
//   profileIconUrl= "/login"
//   profileIcon= {true}
//   ProfileIconElement={FaUserAlt}
//   profileIconColor= "black"
//   searchIcon= {true}
//   SearchIconElement={FaSearch}
//   searchIconColor= "black"
//   cartIconColor= "black"
//   cartIcon= {true}
//   CartIconElement={FaShoppingCart}
//   profileIconColorHover= "#eb4034"
//   searchIconColorHover= "#eb4034"
//   cartIconColorHover= "#eb4034"
//   cartIconMargin= "1vmax"
//   profileIconMargin= "1vmax"
//   searchIconMargin= "1vmax"
//   />
//   );
// };

// export default Header;


import React, { useState } from 'react';
import logo from "../../../images/logo0.png";
import {FaSearch} from "react-icons/fa";
import {FaShoppingCart} from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import {FaUserAlt} from "react-icons/fa";
// import UserOptions from "./UserOptions"
// import { useSelector } from 'react-redux';

const Header = () => {

  const navigate = useNavigate();
  const [isMenuOpen, setMenuOpen] = useState(false);

  const location = useLocation();
  const showFooter = !location.pathname.startsWith("/admin");

  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const {isAuthenticated } = useSelector((state) => state.user);
  // useEffect(() => {
  //   setIsLoggedIn(isAuthenticated);
  // }, [isAuthenticated]);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const scerchClick = () =>{
    navigate("/search");
  }
  const cartClick = () =>{
    navigate("/cart");
  }
  const loginClick = () =>{
    navigate("/login");
  }

  return (
    <>
    {showFooter  &&(
<nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
      <img src={logo} className="h-8" alt="Flowbite Logo"/>
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Nandonik</span>
  </a>
  <div className="flex md:order-2 space-x-3 md:space-x-2 rtl:space-x-reverse">
  <button onClick={scerchClick} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
  <FaSearch/></button>
  <button onClick={cartClick} type="button" className="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
  <FaShoppingCart/></button>

  {/* {isLoggedIn ? (
    <UserOptions/>
  ):(
    <button onClick={loginClick} type="button" class="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
  <FaUserAlt/></button>
  )} */}
  <button onClick={loginClick} type="button" className="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
  <FaUserAlt/></button>
  
  

  <button  onClick={toggleMenu} data-collapse-toggle="navbar-sticky" 
      type="button" 
      className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" 
      aria-controls="navbar-sticky" 
      aria-expanded={isMenuOpen}>
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    
  </div>
  <div className={`items-center justify-between display-block w-full md:block md:w-auto md:order-1 ${isMenuOpen ? '' : 'hidden'}`}id="navbar-sticky">
    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">

      <li>
        <a href="/" className="block py-2 px-3 text-white rounded hover:bg-orange-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Home</a>
      </li>
      <li>
        <a href="/products" className="block py-2 px-3 text-gray-900 rounded hover:bg-orange-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Products</a>
      </li>
      <li>
        <a href="/contact" className="block py-2 px-3 text-gray-900 rounded hover:bg-orange-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
      </li>
      <li>
        <a href="/about" className="block py-2 px-3 text-gray-900 rounded hover:bg-orange-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
      </li>
    </ul>
  </div>
  </div>
  
</nav>
 )}
 </>

  );
};


export default Header;