const http =require('http');
const serve=http.createServer((req,res)=>{
console.log(req);
if(req.url==='/about'){
    res.end(`<h1>Hello in the about page</h1>`)
} if(req.url==='/home'){
   res.end( `<h1>Hello in the Home page</h1>`)
    }
res.end(`
<h1>OOPS</h1>
<p>Page Note Found</p>
<a href="/home">Click Her To Back </a>
`);
})
serve.listen(5050);