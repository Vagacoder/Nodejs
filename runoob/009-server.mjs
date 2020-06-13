/*
 * node js simple http server 
 * using with 010-router.mjs and 011-index.mjs
 */

 import http from 'http';
 import url from 'url';

 function start(route){

    const onRequest = (request, response) =>{
        const pathname = url.parse(request.url).pathname;
        console.log(`Request for ${pathname} received`);

        route(pathname);

        response.writeHead(200, {'Content-Type' : 'text/plain'});
        response.write('Hello world');
        response.end();
    }

    http.createServer(onRequest).listen(8888);
    console.log('Server has started at port 8888.');
 }

 export default start;