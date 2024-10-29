const express=require('express');
const app =express();
const {products}=require('./../data')
app.get("/",(req,res)=>{
    res.send(`click to show all products <br> <button><a href="/api/products">Show</a></button>`)
})
/**
 * the 1M$ Questions is why I sent  JSON in case of sending Html File
 * the answer it's very simple: bcs I'm using client side rendering so the server response it will be JSON data that
 * will be handled
 * withe frontend framework such as reactJs
 * */
app.get("/api/products",(req, res)=>{
    /* now in this methode i want to customer my data type return let's go */
    const product=products.map((value)=>{
        const {id,name,image}=value
        return {id,name,image};
        })
    res.json(product);

})
/*show one product using express routing */
app.get("/api/products/:id",(req, res)=>{
    const id=req.params.id;
    const product=products.find((product)=>product.id===+id)
    if(product){
        res.json(product)
    }else {
        res.status(400);
        res.send(`<h1>Error!</h1>`)
    }
})
/**
 * Routes Can be more complicated so let's go deep
 * */
app.get("/api/products/:id/views/:viewsId",(req, res)=>{
//
})
app.listen(1000,()=>{
    console.log("server working on port 1000")
})
