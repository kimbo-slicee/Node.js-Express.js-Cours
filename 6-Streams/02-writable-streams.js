const fs = require('fs');
const path ='../content/streams.txt';
const writableStream = fs.createWriteStream(path);
writableStream.write('Hello, World!\n');
writableStream.end();