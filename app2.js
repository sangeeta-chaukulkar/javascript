const express=require('express');
const path=require('path');
const adminRoutes=require('./routes/admin');
const shopRoutes=require('./routes/shop');
const contactRoute=require('./routes/contactus');
const sccessRoutes=require('./routes/success');
const app=express();
const errorController=require('./controllers/404');
const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname,'public')));
app.use('/shop',shopRoutes);
app.use('/admin',adminRoutes);
app.use('/contactus',contactRoute);
app.use('/success',sccessRoutes);

app.use(errorController.get404);

app.listen(3000);