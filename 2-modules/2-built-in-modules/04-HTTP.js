const http =require('http');
const {readFileSync}=require('fs')
const serve=http.createServer((req,res)=>{
    //this CallBack will call every time user sent request to server
    const homePage =readFileSync('../../index.html');
console.log(req);
if(req.url==='/about'){
    res.writeHead(200,{'content-type':'text/html'});
    console.log(req.headers,req.httpVersion,req.statusCode);//if You want to know all methodes in req object check
    // node Doc [](https://nodejs.org/fr)
    res.end(`<h1>Hello in the about page</h1>`)
} if(req.url==='/home'){
    res.write(homePage) 
    res.end( `<h1>Hello in the Home page</h1>`)
    }
else{
    res.end(`
    <h1>OOPS</h1>
    <p>Page Note Found</p>
    <a href="/home">Click Her To Back </a>
    `);
    }

})
serve.listen(5050);
/**
 * response.end([data[, encoding]][, callback])
 * This method signals to the server that all of the response headers and body have been sent 📤; that server should
 * consider this message complete. The method, response.end(), MUST be called on each response.
 * */

try {
    http.validateHeaderValue('content-type', 'text/html');
} catch (err) {
    console.error(err instanceof TypeError); // --> true
    console.error(err.code === 'ERR_HTTP_INVALID_HEADER_VALUE'); // --> true
    console.error(err.message); // --> 'Invalid value "undefined" for header "content-type"'
}

try {
    http.validateHeaderValue('content-type', 'oʊmɪɡə');
} catch (err) {
    console.error(err instanceof TypeError); // --> true
    console.error(err.code === 'ERR_INVALID_CHAR'); // --> true
    console.error(err.message); // --> 'Invalid character in header content ["content-type"]'
}
