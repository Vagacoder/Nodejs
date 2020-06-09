/*
 * Example to redirect to different html files based by url
 */

import http from 'http';
import url from 'url';
import fs from 'fs';

 http.createServer((req, res) => {
    let reqUrl = url.parse(req.url, true);
    let filename = "./public" + reqUrl.pathname;
    fs.readFile(filename, (err, data) => {
        if(err){
            res.writeHead(404, {'Content-Type':'text/html'});
            return res.end('404 Not Found');
        }
        res.writeHead(200, {'Content-Type':'text/html'});
        res.write(data);
        res.end();
    })
 }).listen(8080);
