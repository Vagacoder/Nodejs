/*
 *  simple example to parse url
 */

import http from 'http';
import url from 'url';

http.createServer((req, res)=>{

    const reqUrl = url.parse(req.url, true);
    res.writeHead(200, {'Content-Type':'text/plain'});
    res.write(`Request URL host: ${reqUrl.host}\nRequest URL pathname: `
            +`${reqUrl.pathname}\nRequest URL search: ${reqUrl.search}\n`);
    res.end();
    console.log(reqUrl.query);
    return;
}).listen(8080);
