const fs = require('fs');
const tutorial = require('./tutorial');
fs.mkdir('tutorial',(err)=>{
    if(err)
        console.log(err)
    else
        console.log('folder created successfully');
        fs.rmdir('tutorial',(err)=>{
            if(err)
                console.log(err)
            else
                console.log('folder removed successfully')
        })
})
/*
fs.mkdir('tutorial2',(err)=>{
    if(err)
        console.log(err)
    else
        fs.writeFile('./tutorial2/example.txt','123abc',(err)=>{
            if(err)
                console.log(err);
            else
                console.log('successfully created file in folder');
        })
})
*/

// Can not remove a folder if it is not empty
fs.unlink('./tutorial2/example.txt',(err)=>{
    if(err)
        console.log(err)
    else
        fs.rmdir('tutorial2',(err)=>{
            if(err)
                console.log(err)
            else
                console.log('folder removed successfully')
    }) 
})
