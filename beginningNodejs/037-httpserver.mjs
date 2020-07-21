/*
 * node js, http server 
 */

import http from 'http';

const server = http.createServer((req, res) =>{
    // * 1. Process request
    console.log('request starting ...');

    // * 1.1. read headers
    console.log(req.headers);

    // * 1.2. read method
    console.log(req.method);


    // * 2. Process response
    // * 2.1. set status code
    res.statusCode = 200;

    // * 2.2. set/get/remove headers. Optional: can send headers only
    res.setHeader('Content-Type', 'text/plain');
    console.log(res.getHeader('Content-Type'));
    res.removeHeader('Content-Type');

    // * 2.3. write response body
    res.write('hello client!');
    
    // * 2.4. end response
    res.end('\n');
    
})

server.listen(3000);
console.log('Server running at 127.0.0.1:3000');
