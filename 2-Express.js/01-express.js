const express = require('express');
const path =require('path')
const url = require("url");
const app=express();
app.use(express.static('./navbar'))
app.listen(5000,()=>{
    console.log(`Server listening in port 5000`)
})
app.get('/',(req, res)=>{
    res.status(200).send("data sent")

})
/*index.html we call allot of files and the brows don't knon MIME of this content-type so shuld set the conoetnt
 type in the Express it's so essay then node js  */
app.get("/home",(req,res)=>{
    const filePath=path.resolve(__dirname,'./navbar/index.html')
    // there is Two methodes to send statics file form server
    // the first it's by adding to static assets
    // second by SSR 
    res.sendFile(filePath)
})
app.all('*',(req, res)=>{
    res.status(400).send('<h1>Resources note found !</h1>')
})
