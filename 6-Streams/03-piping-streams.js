const fs = require('fs');
const {equal} = require("assert");
const path ='../content/streams.txt';

const readableStream = fs.createReadStream(path);
readableStream.on("data",(chunk)=>{
    console.log(chunk);
})
const writableStream = fs.createWriteStream(path);

// Pipe readable stream into writable stream
readableStream.pipe(writableStream);
//pipe methode allows us to use more then one stream
getWritableStreamSomehow=()=>{
    //
}

getReadableStreamSomehow=()=>{
    //
}
const writer = getWritableStreamSomehow();
const reader = getReadableStreamSomehow();
writer.on('pipe', (src) => {
    console.log('Something is piping into the writer.');
    equal(src, reader);
});
reader.pipe(writer);