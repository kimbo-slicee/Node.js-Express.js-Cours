const express=require('express');
const app=express();
const {people}=require("./../data");
app.use(express.static("./../public"));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
//we can use this middleware if we send data from form directly extend flag id the library using for the encoding
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
app.get('/api/v1/user/:id',(req, res)=>{
    const {id}=req.params;
    console.log(id)
    if(id){
        const user= people.find(ele=> {
           return  ele.id === Number(id);
        });
        res.status(200).json({ success:true,data:user});
    }else {
        res.status(400).json({success:false,msg:"there's no User withe this ID  "});
    }
})
// Add user
app.post('/api/v1/user',(req,res)=>{
 const {nameValue} =req.body
    if(!nameValue){
         res.status(400).json({success:false,msg:"please provide Name Value"})
    }else {
        people.push({id:people.length+1,name:nameValue});
         res.status(200).json({success:true,data:people});
    }
})
// UPDATE User
app.put("/api/v1/user/:id",(req,res)=>{
    const {id}=req.params;
    let {name}=req.body;
    let user=people.find(user=>user.id=parseInt(id));
    user.name=name;
    if(!user){
            res.status(400).json({success:false,msg:`No Person with Id ${id}`})
    }
    res.status(200).json({success:true,data:people});

})
// Delete user
app.delete("/api/v1/user/:id",(req, res)=>{
    let {id}= req.params;
    let user=people.find(user=>user.id=parseInt(id));
    if(!user){
        res.status(400).json({success:false,msg:`No Person with Id ${id}`})
    }else{
        const item =people.indexOf(id);
        people.splice(1,item);
         return  res.status(200).json({success:true,data:people})
    }
})

app.listen(5000,()=>{
    console.log("server listing in port 5000");
})
