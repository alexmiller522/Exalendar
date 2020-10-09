// to test, run 'node http', open chrome, and type localhost:3000

const http = require('http');
const server = http.createServer((req,res)=>{
    if(req.url === '/'){    // localhost:3000/
        res.write('Hello world from nodejs');   // sets response
        res.end();                              // sends response
    }
    else {  // localhost:3000/[anything else]
        res.write('using some other domain');
        res.end();
    }
});

server.listen('3000'); //listening on port 3000