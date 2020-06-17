/*
 * node js for GET request 
 */

import http from 'http';
import url from 'url';
import util from 'util';

http.createServer((req, res) => {
    res.writeHead(200, { 'Content': 'text/plain' });
    res.write(util.inspect(url.parse(req.url, true)));

    let params = url.parse(req.url, true).query;
    if (params.name && params.url) {
        res.write("\n");
        res.write(params.name);
        res.write("\n");
        res.write(params.url);
        res.write("\n");
    }
    res.end();
    // console.log(req);
    console.log(req.url);
}).listen(8080);
