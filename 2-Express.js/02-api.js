const express=require('express');
const app=express();
const {people}=require("./../data");
const userRoutes = require('./Routers/06-Routers');
app.use('/api/users',userRoutes);
app.use(express.static("./../public"));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//we can use this middleware if we send data from form directly extend flag id the library using for the encoding
// CRUD APIS
// get All peoples

app.listen(5000,()=>{
    console.log("server listing in port 5000");
})
