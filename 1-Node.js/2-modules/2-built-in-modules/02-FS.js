const fs = require('fs');
/*in file Model we there's two types of files Methods sync and async methods the sync methods doesn't need a call
 back function but async do */
/*[1]:sync Methods*/
//write file using sync methode
fs.writeFileSync('./content/sync.txt','use SYNC methods in Fs Module to read,write,update also remove this file ');
//read file using sync methode
fs.readFileSync('.content/sync.txt',{flag:'a',encoding:'utf8'});
/* [2]:Async Methode */
//Write to a File:
fs.writeFile('./content/async.txt', 'use ASYNC methods in Fs Module to read,write,update also remove this file ', (err) => {
    if (err) {
        console.error('Error writing to the file:', err);
        return;
    }
    console.log('File written successfully');
});
//Read File
fs.readFile('./content/async.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }
    console.log(data);
});
//Append to a File:
fs.appendFile('./content/async.txt', '\nNew content added!', (err) => {
    if (err) {
        console.error('Error appending to the file:', err);
        return;
    }
    console.log('Content appended successfully');
});
//Delete a File:
fs.unlink('.content/async.txt', (err) => {
    if (err) {
        console.error('Error deleting the file:', err);
        return;
    }
    console.log('File deleted successfully');
});
