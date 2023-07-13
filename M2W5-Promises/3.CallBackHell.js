const fs = require('fs');

fs.readFile('./message.txt', {encoding: 'utf-8'}, (error, data) =>{
    if(error) 
        throw new Error("An Error Occured when reading file!");

    console.log('Read Successful');
    const newData = data + " this is the addditional text string";

    fs.writeFile('./copy.txt', newData, (error) =>{
        if(error) 
            throw new Error ("Error while writing file");

        console.log('Write Successful');

        fs.readFile('./copy.txt', {encoding: 'utf-8'}, (error, text)=>{
            if(error) 
                throw new Error("ERror while reading the file that was just updated");

            console.log("This is the new file copy.txt : " + data);
        });
    });
});


