/*
 * node js, http server. single page
 * For any request we dont accept, server return HTTP 404
 *
 */

import http from 'http';
import fs from 'fs';

function send404(resp){
    resp.writeHead(404, {
        'Content-Type' : 'text/plain'
    });
    resp.write('Error 404: Resource not found.');
    resp.end();
}

const server = http.createServer(function(req, resp){
    if(req.method === 'GET' && req.url === '/'){
        resp.writeHead(200, {'Content-Type':'text/html'});
        fs.createReadStream('./public/index2.html').pipe(resp);
    }else{
        send404(resp);
    }

}).listen(3000);

console.log('Server starts running at port 3000');
