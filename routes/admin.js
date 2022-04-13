const express=require('express');
const router=express.Router();
const path=require('path');
const routeDir=require('../util/path');
const productController=require('../controllers/product')

router.get('/add-product',productController.getAddProduct)

router.post('/add-product', productController.postAddProduct);

// exports.routes = router;
// exports.products = products;
module.exports=router;