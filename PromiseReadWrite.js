const fs= require('fs')
function read(filePath){
   return new Promise((resolve,reject)=>{
    fs.readFile(filePath,(err,data)=>{
        if(err)
        reject('error');
        else
        resolve(data);
    })
   })
}
 function write(filePath,inputdata){
    return new Promise((resolve,reject)=>{
        fs.writeFile(filePath,inputdata,(err)=>{
            if(err)
            reject("error");
            else{
                resolve("Well done");
            }
        })
    })
}
read(`${__dirname}/states.txt`)
.then((data)=>{
    console.log(data.toString());
}).catch((err)=>{
    console.log(err)
})
write(`${__dirname}/file.txt`,'I am writing a new data')
.then((data)=>{
    console.log(data.toString());
}).catch((err)=>{
    console.log(err);
})
