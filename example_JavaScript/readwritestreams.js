// Chunks can be used to read very large files
// without loading the entire file into memory, I think.
const fs = require('fs');
const readStream = fs.createReadStream('./example.txt','utf8');
const writeStream = fs.createWriteStream('destination.txt');
readStream.on('data',(chunk)=>{
    //console.log(chunk);
    writeStream.write(chunk);
});

