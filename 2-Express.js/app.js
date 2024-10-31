// import the middleware function
const {logger,authorize}=require('./05-middleware');
const express=require('express');
const app =express()
// i Can add this Middleware manually but what if a bunch of routes methods then I use methode in Express call use
app.use('/api',[logger,authorize])
// /api/....
app.get("/",(req, res)=>{
    res.send(`<h1>Home Page</h1>`)
})

app.post("/api/v1/auth",logger,(req, res, next)=>{
     res.send(`<h2>auth Authentication </h2>`)
})
app.get("/api/v1/products",logger,(req,res)=>{
 res.send(`<h1>All Products</h1>`)
})
app.listen(2000,()=>{
    console.log("Express work on port 2000")
})