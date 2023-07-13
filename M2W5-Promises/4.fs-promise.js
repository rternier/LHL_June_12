/*
    - Go through Simple Promise implementation of FS
    - Multiple FS.Read's
    - Resolve CallBackHell with Promises
    - Chainig FS Read
*/

const fs = require('fs');
function readFileAsync(filename, encoding){
    return new Promise((resolve, reject)=>{
       fs.readFile(filename, encoding, (error, data)=>{
        if(error)
            reject(error);
        else   
            resolve(data);
       });
    })
}

//readFileAsync('message.txt', 'utf-8')
//.then(data => console.log(data))
//.catch(error => console.log(error));

fs.promises.readFile('message.txt','utf-8')
.then((data)=>{
    console.log("writing a file");
    const newData = "Adding new data to data - " + data;
    return fs.promises.writeFile('./copy.txt', newData)
})
.then(()=>{
    //write successful
    console.log("write successful");
    return fs.promises.readFile('./copy.txt', 'utf-8');
})
.then((finalText)=>{
    console.log(finalText);
})
.catch(error=>console.log(error));





