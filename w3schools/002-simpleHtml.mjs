/*
 * Simple html server with simple query
 */

import http from 'http';
import url from 'url';

http.createServer((req, res) =>{

    const currentQuery = url.parse(req.url, true).query;
    const txt = (currentQuery.year && currentQuery.month)
                ?currentQuery.year + " " + currentQuery.month 
                : "";

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(`<html>
    <body>
    <h2>Welcome</h2>
    <div>Request url:</div>
    <div>${req.url}</div>
    <hr/>
    <div>Request header:</div>
    <div>${req.headers}</div>
    <hr/>
    <div>Query content:</div>
    <div>${txt}</div>
    <hr/>
    <div>Others:</div>
    </body>
    </html>`);
    res.end();
}).listen(8080);
