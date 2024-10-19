const fs = require('fs');
const readableStream = fs.createReadStream('example.txt');

readableStream.on('data', (chunk) => {
    console.log('New data chunk:', chunk);
});
