const express = require("express");
const { getAllCategorys,createCategory,updateCategory,deleteCategory,getCategoryDetails, getAdminCategorys } = require("../controllers/categoryController");
const { isAuthenticatedUser,authorizeRoles } = require("../middleware/auth");

const router=express.Router();

router.route("/categorys").get(getAllCategorys);

router
  .route("/admin/categorys")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getAdminCategorys);

router.route("/admin/category/new").post(isAuthenticatedUser,authorizeRoles("admin"),createCategory);

router.route("/admin/category/:id").put(isAuthenticatedUser,authorizeRoles("admin"),updateCategory).delete(isAuthenticatedUser,authorizeRoles("admin"),deleteCategory);

router.route("/category/:id").get(getCategoryDetails);

module.exports = router;