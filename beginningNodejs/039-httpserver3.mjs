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
    if(req.method === 'GET'){

        // * resolve file path to system path
        let fileurl;
        if(req.url === '/'){
            fileurl = '/index3.html';
        }else {
            fileurl = req.url;
        }
        let filepath = path.resolve('./public' + fileurl);

        // * lookup mime type
        let fileExt = path.extname(filepath);
        let mimeType = mimeloolup[fileExt];
        if(!mimeType){
            send404(resp);
            return;
        }

        // * see if file exists
        fs.exists(filepath, function(exists){
            if(!exists){
                send404(resp);
                return;
            }
            
            resp.writeHead(200, {'Content-Type':'text/html'});
            fs.createReadStream(filepath).pipe(resp);
        })
    }else{
        send404(resp);
    }

}).listen(3000);

console.log('Server starts running at port 3000');
