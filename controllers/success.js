const path=require('path');
const routeDir=require('../util/path');
exports.getSuccess=(req,res,next)=>{
    res.sendFile(path.join(routeDir,'views2','success.html'));
 }