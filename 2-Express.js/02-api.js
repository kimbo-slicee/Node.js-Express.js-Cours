const express=require('express');
const app=express();
app.get('/',(req, res)=>{
    res.send(`<p><a href="/api/apollo">APPOLO</a></p>`)

    // it's realy easy to send any type of data withe Express.js

})
app.get('/api/apollo',(req, res)=>{
    res.json([{
        name:'APOLLO 🚀',
        date:'July 16, 1969',
        direction:'Moon 🌚'
    }])
})
app.listen(1969,()=>{
    console.log("I'M here in port 1969")
    })