const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/productController')

router.get('/products', ProductController.getAllProducts)
router.get('/categories/:category_id/products', ProductController.getAllProductsByCategoryId)
router.get('/products/:product_id', ProductController.getProductById)
router.get('/products/search/:searchKeyword', ProductController.searchProductByKeyword)

module.exports = router