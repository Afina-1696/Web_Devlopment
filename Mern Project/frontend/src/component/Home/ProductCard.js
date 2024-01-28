// import React from "react";
// import { Link } from "react-router-dom";
// import ReactStars from "react-rating-stars-component";
// import { Rating } from "@material-ui/lab";

// const ProductCard = ({product}) => {
//     const options ={
//         edit: false,
//         color: "rgba(20,20,20,0.1)",
//         activeColor: "tomato",
//         size: window.innerWidth<600 ? 20 : 25,
//         value:product.ratings,
//         isHalf: true,
//     };

//     // Check if product and product.images are defined before accessing properties
//   const imageUrl = product.images && product.images[0] && product.images[0].url;
//     return (
//         <Link className="productCard" to={`/product/${product._id}`}>
//                   {/* Use imageUrl with optional chaining to handle undefined values */}
//       <img src={imageUrl} alt={product.name} />
//             <p>{product.name}</p>
//             <div>
//                 <ReactStars {...options} /> {" "}
//                 <span>({product.numOfReviews} Reviews)</span>
//             </div>
//             <span>{`৳ ${product.price}`}</span>
//         </Link>
//     );
// };

// export default ProductCard;

import React from "react";
import { Link } from "react-router-dom";
import { Rating } from "@material-ui/lab";

const ProductCard = ({ product }) => {
  const options = {
    value: product.ratings,
    readOnly: true,
    precision: 0.5,
  };
  return (
    <Link className="productCard" to={`/product/${product._id}`}>
      <img src={product.images[0].url} alt={product.name} />
      <p>{product.name}</p>
      <div>
        <Rating {...options} />{" "}
        <span className="productCardSpan">
          {" "}
          ({product.numOfReviews} Reviews)
        </span>
      </div>
      <span>{`৳${product.price}`}</span>
    </Link>
  );
};

export default ProductCard;