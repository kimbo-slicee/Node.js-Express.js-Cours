const path=require('path');
console.log(`this methode return the platform that's i us${path.sep}`)
const filePath=path.join('/content','subFolder','test.txt');
console.log(`filePath of test.txt is ${filePath}`);
const absoluteTPath =path.resolve(__dirname,'content','subFolder','test.txt');
const file =path.resolve(__filename);
console.log(`The absolute path of the file test.txt is: ${absoluteTPath}`);
console.log(file);

