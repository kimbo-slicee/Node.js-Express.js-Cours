const {readFile}=require('fs');
const path='./content/async.text';
/**
 * How it works: readFile starts reading the file asynchronously. Once it’s done, it calls the callback function,
 * passing the error (if any) and the data.
 * Problem: Callbacks can lead to "callback hell" or "pyramid of doom," where deeply nested callbacks make code hard to read and maintain.
 * */
const getText=(path)=>{
    readFile(path,'utf8',(err,data)=>{
        if(err) throw Error;
        console.log(data);
        });
}
/** Async and Await pattern
 * */
const readeFiel=async ()=>{
     await getText(path);
}
