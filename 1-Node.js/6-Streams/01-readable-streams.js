const {createReadStream,readFileSync}=require('fs');
const http=require('http');
const path='../content/sync.txt'
const stream=createReadStream(path,{highWaterMark:1000,encoding:'utf8'})
// stream.on('data',(chunk)=>{
//     console.log(chunk);
//     console.log(`Received ${chunk.length} bytes of data`)
// })
// stream.on('data',(err)=>{
//     console.log(err)
// })

http.createServer((req, res)=>{
    /*Note  when I use readFileSync method the file size in the browser 2.8KB so let's try streams*/
// const data=readFileSync(path,'utf8');
// res.end(data);
    stream.on('data',(chunk)=>{
        res.end(chunk);
    })
    stream.on('error',(err)=>{
        console.log(err)
        res.end(err)
    })
}).listen(2025)
//Real world example
const http = require('node:http');

const server = http.createServer((req, res) => {
    // `req` is an http.IncomingMessage, which is a readable stream.
    // `res` is an http.ServerResponse, which is a writable stream.

    let body = '';
    // Get the data as utf8 strings.
    // If an encoding is not set, Buffer objects will be received.
    req.setEncoding('utf8');

    // Readable streams emit 'data' events once a listener is added.
    req.on('data', (chunk) => {
        body += chunk;
    });

    // The 'end' event indicates that the entire body has been received.
    req.on('end', () => {
        try {
            const data = JSON.parse(body);
            // Write back something interesting to the user:
            res.write(typeof data);
            res.end();
        } catch (er) {
            // uh oh! bad json!
            res.statusCode = 400;
            return res.end(`error: ${er.message}`);
        }
    });
});

server.listen(2030);

