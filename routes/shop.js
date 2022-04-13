const express=require('express');
const router=express.Router();
const path=require('path');
const routeDir=require('../util/path');
const productsController=require('../controllers/product')

router.get('/',productsController.getProducts)

module.exports=router;
