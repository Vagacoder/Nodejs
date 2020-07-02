/*
 * simple http server 
 */

import http from 'http';
import fs from 'fs';

 http.createServer((req, res)=>{

    fs.readFile('./public/index1.html', (err, data) =>{
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    })

 }).listen(8888);