/*
 * node js web module, server 
 */

import http from 'http';
import fs from 'fs';
import url from 'url';

http.createServer((req, res) =>{
    let pathname = url.parse(req.url).pathname;

    console.log(`Request for ${pathname} received`);

    if(pathname === "/"){
        fs.readFile(('./public/index.html'), (err, data) => {
            if(err){
                console.error(err);
                res.writeHead(404, {'Content-Type':'text/html'});
            }else{
                res.writeHead(200, {'Content-Type':'text/html'});
                res.write(data);
            }
            res.end();
        })
    }

}).listen(8080);

console.log('Server running at 127.0.0.1:8080');
