import express, { application } from 'express';
const app =express;
/**
 * Http methodes with Express js 
 * */ 
// // get All Data
// app.get("/",(req,res)=>{
// res.send("Hello World !")
// })
// //get only one elment
// app.get("/about",()=>{
//     console.log("about page")
//     res.status(200).send("About Page")
// })
//
// // all it's for all the requests
// app.all('*',(req,res)=>{
// res.status(400).send("page note found")
// })
// app.listen(5000,()=>{
//     console.log("server is listening")
// })
app.listen(5000,()=>{
    console.log("Server listening in port 500")
})
app.get("/",(req,res)=>{
    res.status(200).send("server listening in port  ")
})
app.all("*",(req,res)=>{
    res.status(400).send("resources not found ")
})
