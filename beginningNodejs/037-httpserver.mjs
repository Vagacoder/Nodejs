/*
 * node js, http server 
 */

import http from 'http';

const server = http.createServer((req, res) =>{
    console.log('request starting ...');
    console.log(req.headers);
    console.log(req.method);

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    console.log(res.getHeader('Content-Type'));
    res.removeHeader('Content-Type');
    res.write('hello client!');
    res.end('\n');
    
})

server.listen(3000);
console.log('Server running at 127.0.0.1:3000');
