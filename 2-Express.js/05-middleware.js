const express=require('express');
const app=express();
const logger=(req,res,next)=>{
const methode =req.method;
const url=req.url;
const date=new Date().getFullYear()
    console.log(methode,url,date)
    next()
}
app.get('/',logger,(req, res)=>{
    const methode =req.method;
    const url=req.url;
    const date=new Date().getFullYear()
    res.send(`<h1>I'm Using middleware </h1>`)
    /**
     * withe this request i want to send all this data but if i have a lot of function how can't send send all
     * data the answer it's using middleware okay let's create our first middleware
     */

})
/**
 * but the best practice it's that using a separate files for middleware bsc in one project we can have bunch of
 * middlewares
 * */