/*Use Event Loop to Handel I/O Operations*/
const fs =require('fs');
console.log('start First Task')
fs.readFile('./content/async.txt','utf8',(err,res)=>{
if(err){
    console.log(err);
}
console.log(res);
console.log('Completed First task');
})
console.log('starting the next task ');
/**/
console.log("i Wil Run First");
setImmediate(()=>{
    console.log("I Will run Second");
});
const http=require('http');
const server=http.createServer((req,res)=>{
    console.log("request Event");
    res.end("Hello World")
})
server.listen(5000,()=>{
    console.log("server Listening on port : 5000...")//this listen methode is work it's async that's server stay a live
})