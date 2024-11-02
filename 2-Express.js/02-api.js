const express=require('express');
const app=express();
const {people}=require("./../data");
app.use(express.static("./../public"))

app.get('/',(req, res)=>{
    res.send(`<p><a href="/api/apollo">APOLLO</a></p>`)

    // it's realy easy to send any type of data withe Express.js

})
app.get('/api/apollo',(req, res)=>{
    res.json([{
        name:'APOLLO 🚀',
        date:'July 16, 1969',
        direction:'Moon 🌚'
    }])
})
/*--------------------------------------------People 👨‍👨‍👦‍👦 API---------------------------------------------*/
app.get("/api/v1",(req, res)=>{
    res.status(200).json({success:true,data:people})
    console.log("login api")
})
app.listen(5000,()=>{
    console.log(`Apollo listing 👂 in port 5000`)
    })


