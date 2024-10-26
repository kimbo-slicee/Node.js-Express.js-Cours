const fs = require('fs');
const path ='../content/streams.txt';
const writableStream = fs.createWriteStream(path);
writableStream.write('Hello, World!\n');
writableStream.write('Hello!\n');
writableStream.write('Hello,!\n');
writableStream.write('Hello, World!\n');
writableStream.end();
//Writable streams (such as res in the example) expose methods such as write() and end() that are used to write data onto the stream.
//Examples of Writable streams include:
// HTTP requests, on the client
// HTTP responses, on the server
// fs write streams
// zlib streams
// crypto streams
// TCP sockets
// child process stdin
// process.stdout, process.stderr
for (let i = 0; i < 100; i++) {
    WritableStream.write(`hello, #${i}!\n`);
}
WritableStream.on('finish', () => {
    console.log('All writes are now complete.');
});
WritableStream .end('This is the end\n');