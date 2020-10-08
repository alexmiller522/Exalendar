/* It appears Javascript runs through the code asynchronously. Code written the top is not
*  inherently guarenteed to finish before code written later.
*  
*  https://medium.com/@marcellamaki/a-brief-overview-of-order-of-execution-in-javascript-e28744aa9479
*/

const fs = require('fs');

fs.unlink('example2.txt',(err)=>{
    if(err)
        console.log(err)
    else
        console.log('Successfully deleted the file');
})

fs.writeFile('example1.txt', "sample text", (err)=>{
    if(err)
        console.log(err);
    else{    
        console.log("File successfully created");
        fs.readFile('example1.txt','utf8',(err,file)=>{
            if(err)
                console.log(err)
            else    
                console.log(file);
        });
    }
})

fs.rename('example.txt','example2.txt',(err)=>{
    if(err)
        console.log(err);
    else
        console.log('successfully renamed the file');
})

fs.appendFile('example2.txt',' Some data being appended', (err)=>{
    if(err)
        console.log(err);
    else
        console.log('Successfully appended data to file');
})


