/*
 * node js, http server. single page
 * For any request we dont accept, server return HTTP 404
 * Add a javascript to html file
 */

import http from 'http';
import fs from 'fs';
import path from 'path';

function send404(resp){
    resp.writeHead(404, {
        'Content-Type' : 'text/plain'
    });
    resp.write('Error 404: Resource not found.');
    resp.end();
}

const mimeloolup = {
    '.js' : 'application/javascript',
    '.html' : 'text/html'
}

const server = http.createServer(function(req, resp){

    // * 1. check request method, process GET
    if(req.method === 'GET'){

        // * 2. resolve file path to system path
        let fileurl;
        // * 2.1. redirect / to index3.html
        if(req.url === '/'){
            fileurl = '/index3.html';
        }else {
            fileurl = req.url;
        }
        // * 2.2. resolt to public folder
        let filepath = path.resolve('./public' + fileurl);
        console.log(filepath.toString());

        // * 3. lookup mime type mapped to file extension
        let fileExt = path.extname(filepath);
        let mimeType = mimeloolup[fileExt];
        if(!mimeType){
            send404(resp);
            return;
        }

        // * 4. see if file exists
        fs.exists(filepath, function(exists){
            if(!exists){
                send404(resp);
                return;
            }
            
            // * 5. send headers and response
            resp.writeHead(200, {'Content-Type':'text/html'});
            fs.createReadStream(filepath).pipe(resp);
        })
    }else{
        send404(resp);
    }

}).listen(3000);

console.log('Server starts running at port 3000');
