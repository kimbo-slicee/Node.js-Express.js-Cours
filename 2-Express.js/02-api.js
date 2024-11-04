const express=require('express');
const app=express();
const {people}=require("./../data");
app.use(express.static("./../public"))
// CRUD APIS
// get All peoples
app.get('/api/v1/users',(req, res)=>{
    if(people.length>0){
    res.status(200).json({data:people})
    }else {
    res.send(400).send({success:false,msg:"NO USER ARE FOUNDED"})
    }

})
//getOnePerson
app.get('api/v1/user:id',(req, res)=>{
    const {id}=req.params;
})
// Add user
/** but let's discus about what happen when I send data from front-end to backend service data that was sent it's
encoded data and i can access this data

 */
app.post('/api/v1/users',(req,res)=>{

})
app.listen(5000,()=>{
    console.log("server listing in port 5000");
})
