const Product = require("../models/productModel");
const ErrorHandler = require("../utils/errorhander");





//Create Product -- Admin
exports.createProduct = async (req,res,next)=>{
    const product = await Product.create(req.body);

    res.status(201).json({
        sucess:true,
        product
    })

}

//Get all product
exports.getAllProducts = async(req,res)=>{

    const products = await Product.find();

    res.status(200).json({
        sucess:true,
        products
    })
}


// Get Product Details
exports.getProductDetails = async (req,res,next) => {
    const product = await Product.findById(req.params.id);
  
    if (!product) {
      return next(new ErrorHandler("Product not found",404));
    }
  
    res.status(200).json({
      success: true,
      product,
    });
  };


//Update products -- Admin

exports.updateProduct = async (req,res,next)=>{

    let product = await Product.findById(req.params.id);

  
    if (!product) {
        return next(new ErrorHandler("Product not found",404));
    }

    product = await Product.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true,
        useFindAndModify:false
    });

    res.status(200).json({
        success:true,
        product
    })
}

//Delete Product

exports.deleteProduct = async(req,res,next)=>{

    const product = await Product.findById(req.params.id);

  
    if (!product) {
        return next(new ErrorHandler("Product not found",404));
    }

    await product.deleteOne();
    
    res.status(200).json({
        success:true,
        message:"Product Delete Successfully"
    });
}
