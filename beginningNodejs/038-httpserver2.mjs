/*
 * node js, http server. single page
 * For any request we dont accept, server return HTTP 404
 *
 */

import http from 'http';
import fs from 'fs';

// * 1. error handler
function send404(resp){
    // * 1.1. explicitly send header, move into body only mode
    resp.writeHead(404, {
        'Content-Type' : 'text/plain'
    });

    // * 1.2. send response body
    resp.write('Error 404: Resource not found.');
    resp.end();
}

const server = http.createServer(function(req, resp){
    // * 2. check request method and url
    if(req.method === 'GET' && req.url === '/'){

        // * 2.2. for correct request and url, explicitly send header
        resp.writeHead(200, {'Content-Type':'text/html'});

        // * 2.3. in body only mode, pipe fs stream to response
        fs.createReadStream('./public/index2.html').pipe(resp);
    }else{
        send404(resp);
    }

}).listen(3000);

console.log('Server starts running at port 3000');
