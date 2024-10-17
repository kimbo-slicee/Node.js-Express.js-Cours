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
console.log('starting the next task ')