const express=require('express');
const router=express.Router();
const path=require('path');
const routeDir=require('../util/path');
const contactController=require('../controllers/contactus');

 router.get('/',contactController.getContacts)


module.exports=router;