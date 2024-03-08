const express = require('express');
const { createNewProduct, getAllProducts, updateProduct, deleteProduct, getProductDetails } = require('../controllers/productControllers');
const router=express.Router()


// Create Product Api ==== Admin
router.route("/product/new").post(createNewProduct);
// Get Product
router.route("/products").get(getAllProducts)
// Update Product-----Admin
router.route("/product/:id").put(updateProduct).delete(deleteProduct).get(getProductDetails)





module.exports=router
