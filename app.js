// /*My Modules*/
const userNameEndEmail=require('./2-modules/1-my-modules/01-module');
const logUser=require('./2-modules/1-my-modules/02-module')
const userdata=require('./2-modules/1-my-modules/03-module');
require('./2-modules/1-my-modules/04-module');
logUser(userNameEndEmail);
for (let key in userdata['user']) {
    console.log(userdata["user"][key])
}
/*Built in Models*/
const osInfo=require('./2-modules/2-built-in-modules/01-OS');
const userInfo=require("./2-modules/2-built-in-modules/01-OS")
/*Path Module */
const pathModule=require('./2-modules/2-built-in-modules/03-PATH')
/*Fs Module */
const _=require('loadash');
let items=[1,[2,[3,[4,[5,[6]]]]]];
const newTimes=_.flatMap(items);
console.log(newTimes);
// Simpel BackEnd backend
const {readFileSync}=require('fs')
const http =require('http');
const server=http.createServer((req,res)=>{
    const url=req.url
    const homePage =readFileSync('./index.html');    
    const style=readFileSync('./styles.css')
    const appjs=readFileSync('./app.js')
    const logo=readFileSync('./logo.svg')
    if(url==='/'){
        res.writeHead(200,{'content-type':'text/html'});
        res.write(homePage);
        res.end()
    }
    else if(url==='/styles.css'){
        res.writeHead(200,{'content-type':'text/css'});        
        res.write(style);
        res.end()
    }
    else if(url==='/logo.svg'){
     res.writeHead(200,{'content-type':'image/svg+xml'})
     res.write(logo);
     res.end()
    }
    else{
        res.writeHead(400,{'content-type':'text/html'})
        res.write(`<h1>Path Dons't finde </h1>`);
        res.end()
    }
    })
 
server.listen(2024);
