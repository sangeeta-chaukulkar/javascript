const express=require('express');
const router=express.Router();
const path=require('path');
const routeDir=require('../util/path');
const successController=require('../controllers/success')

router.post('/',successController.getSuccess);


module.exports=router;