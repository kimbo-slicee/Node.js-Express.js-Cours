const eventEmitter=require('events');
const costomEmitter=new eventEmitter();
/*in the event Emitter we must respect the order which mean's we have listening  the event after before amit it */
costomEmitter.on('response',(user,age,password)=>{
    console.log(`Hello I'm ${user} and I ${age} my password is ${password}`)//don't do this do never shear ur password
})
costomEmitter.on('response',()=>{
    console.log('Data has ben received')
})
costomEmitter.emit('response',"GGG","XX","*****");
/*Event are the Core concept in Node and to Understand Events more deeply we need to work with HTTP Module */
const http=require('http');
const server=http.createServer()
server.on('request',(req,resp)=>{
resp.end("resp")
})
server.listen(2025)