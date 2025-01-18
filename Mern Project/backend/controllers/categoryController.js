const Category = require("../models/categoryModel");
const ErrorHandler = require("../utils/errorhander");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../utils/apifeatures");
const cloudinary = require("cloudinary");

//Create Category -- Admin
exports.createCategory = catchAsyncErrors(async (req,res,next)=>{
  let images = [];

  if (typeof req.body.images === "string") {
    images.push(req.body.images);
  } else {
    images = req.body.images;
  }

  const imagesLinks = [];

  for (let i = 0; i < images.length; i++) {
    const result = await cloudinary.v2.uploader.upload(images[i], {
      folder: "categorys",
    });

    imagesLinks.push({
      public_id: result.public_id,
      url: result.secure_url,
    });
  }

  req.body.images = imagesLinks;
    req.body.user = req.user.id;

    const category = await Category.create(req.body);

    res.status(201).json({
        success:true,
        category,
    });

});

// Get All Category
exports.getAllCategorys = catchAsyncErrors(async (req, res, next) => {
  const resultPerPage = 8;
  const categorysCount = await Category.countDocuments();

  const apiFeature = new ApiFeatures(Category.find(), req.query)
    .search()
    .filter();


    apiFeature.pagination(resultPerPage);

    const categorys = await apiFeature.query;
  
    const filteredCategorysCount = categorys.length;

  res.status(200).json({
    success: true,
    categorys,
    categorysCount,
    resultPerPage,
    filteredCategorysCount,
  });
});

// Get All Category (Admin)
exports.getAdminCategorys = catchAsyncErrors(async (req, res, next) => {
  const categorys = await Category.find();

  res.status(200).json({
    success: true,
    categorys,
  });
});


// Get category details
exports.getCategoryDetails = catchAsyncErrors(async(req,res,next)=>{

    const category = await Category.findById(req.params.id);

    
    if(!category){
        return next(new ErrorHandler("Category not found",404));
    }

    
    res.status(200).json({
        success:true,
        category,
    })
    
});

//Update Category -- Admin

exports.updateCategory = catchAsyncErrors(async (req,res,next)=>{

    let category = await Category.findById(req.params.id);

    
    if(!category){
        return next(new ErrorHandler("Category not found",404));
    }

    // Images Start Here
  let images = [];

  if (typeof req.body.images === "string") {
    images.push(req.body.images);
  } else {
    images = req.body.images;
  }

  if (images !== undefined) {
    // Deleting Images From Cloudinary
    for (let i = 0; i < category.images.length; i++) {
      await cloudinary.v2.uploader.destroy(category.images[i].public_id);
    }

    const imagesLinks = [];

    for (let i = 0; i < images.length; i++) {
      const result = await cloudinary.v2.uploader.upload(images[i], {
        folder: "categorys",
      });

      imagesLinks.push({
        public_id: result.public_id,
        url: result.secure_url,
      });
    }

    req.body.images = imagesLinks;
  }

  category = await Category.findByIdAndUpdate(req.params.id,req.body, {
        new:true,
        runValidators:true,
        useFindAndModify:false
    });

    res.status(200).json({
        success:true,
        category
    })
});

//Delete Category

exports.deleteCategory = catchAsyncErrors(async(req,res,next)=>{

    const category = await Category.findById(req.params.id);

    
    if(!category){
        return next(new ErrorHandler("Category not found",404));
    }

      // Deleting Images From Cloudinary
  for (let i = 0; i < category.images.length; i++) {
    await cloudinary.v2.uploader.destroy(category.images[i].public_id);
  }

    await category.deleteOne();

    res.status(200).json({
        success:true,
        message:"Category deleted successfully"
    })

});