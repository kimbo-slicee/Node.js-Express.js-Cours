const express=require('express');
const app =express();
const productsList=require('../data').products
app.get("/",(req, res)=>{
    res.send(` <h1> Click her 👉 <a href="/api/v1/query">Click</a></h1>`)
})
app.get("/api/v1/query",(req, res)=>{
    let sortedProducts=[...productsList];
    console.log(req)
    const {n,l}=req.query
    if(n){
      sortedProducts= sortedProducts.find(products=>{
           return  products.name.startsWith(n)
        })
    }
    if(l){
        sortedProducts=sortedProducts.slice(0,Number(l))
    }
    if(sortedProducts.length<1){
        res.status(200).json({success:true,data:[]});

    }
    res.status(200).json(sortedProducts);

})

app.listen(5000,()=>{
    console.log("Server listing in port 5000...")
})