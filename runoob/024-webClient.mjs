/*
 * node js web module, client 
 */

import http from 'http';

const options ={
    host: 'localhost',
    port: '8080',
    path: '/index.html'
}

const callback = (res)=>{
    let body = '';
    res.on('data', (data)=>{
        body += data;
    });

    res.on('end', ()=>{
        console.log(body);
    })
}

let req = http.request(options, callback);
req.end();
