const express=require('express');
const app=express();
const {people}=require("./../data");
app.use(express.static("./../public"))
app.use(express.json());
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
app.get("/api/v1/people",(req, res)=>{
    res.status(200).json([{success:true,data:people}])

})
app.post("/api/v1/people",(req,res)=>{
    const {name}=req.body
    if(!name){
        res.status(400).json({success:false,msg:"message error"})
    }else{
        res.status(200).json({success:true,data:name})

    }
})

app.listen(5000,()=>{
    console.log(`Apollo listing 👂 in port 5000`)
    })


