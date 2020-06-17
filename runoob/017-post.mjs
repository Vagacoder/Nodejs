/*
 * node js post request 
 */

 import http from 'http';
 import querystring from 'querystring';
 import fs from 'fs';

 http.createServer((req, res) =>{

    let post = '';

    req.on('data', (chunk) => {
        post += chunk;
    });

    req.on('end', () =>{
        console.log(post);

        post = querystring.parse(post);


        res.writeHead(200, {'Content-Type':'text/html'});
        if(post.name && post.url){
            res.write(post.name);
            res.write('\n');
            res.write(post.url);
            res.write('\n');
            res.end();
        }else{
            fs.readFile('public/form.html', (err, data)=>{
                res.write(data);
                res.end();
            });
        }

    });

 }).listen(3000);