const path=require('path');
const routeDir=require('../util/path');
exports.getContacts=(req,res,next)=>{
    res.sendFile(path.join(routeDir,'views2','contactus.html'));
 }