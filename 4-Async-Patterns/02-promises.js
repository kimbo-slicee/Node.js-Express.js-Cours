const {readFile}=require('fs');
const path='../content/async.txt'
const getFile=(path)=>{
return new Promise((resolve, reject)=>{
    readFile(path,"utf8",(err,data)=>{
        if(err)  reject(err);
        else resolve(data);
    })
})
};
getFile(path).then(result=>console.log(result)).catch(err=>console.log(err))

