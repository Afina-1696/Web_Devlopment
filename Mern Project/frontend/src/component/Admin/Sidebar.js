import React from "react";
import "./sidebar.css";
import logo from "../../images/logo0.png";
import { Link } from "react-router-dom";
import { TreeView, TreeItem } from "@material-ui/lab";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PostAddIcon from "@material-ui/icons/PostAdd";
import AddIcon from "@material-ui/icons/Add";
import ImportExportIcon from "@material-ui/icons/ImportExport";
import ListAltIcon from "@material-ui/icons/ListAlt";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import RateReviewIcon from "@material-ui/icons/RateReview";




const Sidebar = () => {
 
  const image ={
    paddingTop: `4rem`,
    paddingLeft: `1rem`,
    width: `50%`,
    transition: `all 0.5s`,
    filter: `drop-shadow(0 0 10px tomato)`,
  }
  return (

    <div className="sidebar">
      <div>
      <Link to="/" >
        <img src={logo} alt="Ecommerce" style={image} />
      </Link>
     
      <Link to="/admin/dashboard">
        <p>
          <span className="fa fa-2x"> <DashboardIcon /></span>
           <span className="nav-text">Dashboard</span>
        </p>
      </Link>

      <Link>
        <TreeView className="fa fa-2x"
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ImportExportIcon />}
        >
          <TreeItem nodeId="1" className="product" label="Products">
            <Link to="/admin/products">
              <TreeItem nodeId="2"  label="All" icon={<PostAddIcon />} />
            </Link>

            <Link to="/admin/product">
              <TreeItem nodeId="3" label="Create" icon={<AddIcon />} />
            </Link>
          </TreeItem>
        </TreeView>
      </Link>

      <Link to="/admin/orders">
        <p>
        <span className="fa fa-2x"><ListAltIcon /></span>
         <span className="nav-text">Orders</span>
        </p>
      </Link>
      



      <Link to="/admin/users">
        <p>
        <span className="fa fa-2x"><PeopleIcon /></span>
          <span className="nav-text">Users</span>
        </p>
      </Link>
      

     
      <Link to="/admin/reviews">
        <p>
          <span className="fa fa-2x"><RateReviewIcon /></span>
          <span className="nav-text">Reviews</span>
        </p>
      </Link>

    {/* <Link>
      <TreeView
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ImportExportIcon />}
        >
          <TreeItem nodeId="1" label="Category">
            <Link to="/admin/categorylist">
              <TreeItem nodeId="2" label="All" icon={<PostAddIcon />} />
            </Link>

            <Link to="/admin/category">
              <TreeItem nodeId="3" label="Create" icon={<AddIcon />} />
            </Link>
          </TreeItem>
        </TreeView>
      </Link> */}
      {/* <Link to="/admin/category">
        <p>
          <RateReviewIcon />
          Category
        </p>
      </Link> */}
      </div>
      </div>
  );
};

export default Sidebar;