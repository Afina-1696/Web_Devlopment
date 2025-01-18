import React, { useState } from "react";
import "./sidebar.css";
// import { useMediaQuery } from 'react-responsive';
import { Link } from "react-router-dom";
import Logo from "../../images/logo0.png";
import { UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";
import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilSignOutAlt,
  UilAngleDown,
  UilAngleRight,
  UilUserCircle,
} from "@iconscout/react-unicons";


import { useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";
import { logout } from "../../actions/userAction";
import { useDispatch } from "react-redux";


const SidebarData = [
  {
    icon: <UilEstate/>,
    heading: "Dashboard",
    path: "/admin/dashboard",
  },
  {
    icon: <UilClipboardAlt/>,
    heading: "Orders",
    path: "/admin/orders"
  },
  {
    icon: <UilUsersAlt/>,
    heading: "Users",
    path: "/admin/users"
  },
  {
    icon: <UilPackage/>,
    heading: 'Products',
    // path: '/admin/products',
    subitems: [
      { heading: "All Products List", 
        path: "/admin/products" },
      { heading: "Create Product", 
        path: "/admin/product" },
    ],
  },
  {
    icon: <UilUserCircle/>,
    heading: 'My Profile',
    path: "/admin/account"
  },
];

const Sidebar = () => {
  const [selected, setSelected] = useState(0);

  const [expanded, setExpanded] = useState(true);

  const [expandedProducts, setExpandedProducts] = useState(true);

  const navigate = useNavigate();
  const alert = useAlert();
  const dispatch = useDispatch();

  // const isMobile = useMediaQuery({ maxWidth: 768 });

  const sidebarVariants = {
    true: {
      left : '0'
    },
    false:{
      left : '-60%'
    }
  }

  const handleProductClick = (item) => {
    setExpandedProducts(!expandedProducts);
  
  };

  const logoutUser = () => {
    dispatch(logout());
    alert.success("Logout Successfully");
    navigate("/");
  }

  
  const handleBarClick = () => {
    setExpanded(!expanded);
  };
  const screenWidth = window.innerWidth;
  const calculateLeftPosition = () => {
    if (screenWidth <= 786) {
      return expanded ? '60%' : '5%'; //on small screens
    } else {
      return expanded ? '31%' : '5%'; //on larger screens
    }
  };

  const leftStyle = {
    left: calculateLeftPosition()
  };
  // console.log(window.innerWidth)
  return (
    <>
      <div className="bars" style={leftStyle} onClick={handleBarClick}>
        <UilBars />
      </div>
    <motion.div className='sidebar'
    variants={sidebarVariants}
    animate={expanded ? 'true' : 'false'}
    >
      {/* logo */}
      <div className="logo">
        <img src={Logo} alt="logo" />
        <span>
          Nand<span>o</span>nik
        </span>
      </div>

       <div className="menu">
          {SidebarData.map((item, index) => (
            <div key={index}>
              {item.subitems ? (
                <>
                  <div
                    className={
                      selected === index ? "menuItem active" : "menuItem"
                    }
                    onClick={handleProductClick}
                  >
                    {item.icon}
                    <span>{item.heading}</span>
                    {expandedProducts ? <UilAngleDown /> : <UilAngleRight />}
                  </div>
                  {expandedProducts &&
                    item.subitems.map((subitem, subindex) => (
                      <Link to={subitem.path} key={subindex}>
                        <div
                          className={
                            selected === subindex
                              ? "menuItem subitem active"
                              : "menuItem subitem"
                          }
                          onClick={() => setSelected(subindex)}
                        >
                          <span>{subitem.heading}</span>
                        </div>
                      </Link>
                    ))}
                </>
              ) : (
                <Link to={item.path}>
                  <div
                    className={
                      selected === index ? "menuItem active" : "menuItem"
                    }
                    onClick={() => setSelected(index)}
                  >
                    {item.icon}
                    <span>{item.heading}</span>
                  </div>
                </Link>
              )}
            </div>
          ))}
          {/* signoutIcon */}
          <div className="menuItem" onClick={logoutUser}>
            <UilSignOutAlt />
            <span>Logout</span>
          </div>
        </div>

    </motion.div>
    </>
  );
};

export default Sidebar;
