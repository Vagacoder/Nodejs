/*
 * A very good module for working with file uploads, called "Formidable".
 * $ npm install formidable
 * 
 */

import http from 'http';
import fs from 'fs';
import formidable from 'formidable';


http.createServer((req, res) => {

    console.log('req.url', req.url);

    if (req.url == '/fileupload') {
        
        console.log('handling file upload');

        let form = new formidable.IncomingForm();
        form.parse(req, (err, fields, files) => {

            let oldPath = files.fileToUpload.path;
            let newPath = './upload/' + files.fileToUpload.name;

            // fs.rename(oldPath, newPath, (err) => {
            //     if (err) {
            //         console.log(err.message);
            //     }

            //     console.log('moving file');

            //     res.write('File uploaded');
            //     res.end();
            // })

            fs.copyFile(oldPath, newPath, (err) => {
                if (err) {
                    console.log(err.message);
                }

                console.log('copying file');

                fs.readFile('./public/fileUpload.html', (err, data) => {
                    if(err){
                        console.log(err.message);
                    }
                    res.write(data);
                    res.end();
                });

            })
            
        });
    }
    else {
        const filename = './public/formUpload.html';
        fs.readFile(filename, (err, data) => {
            
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                return res.end('404 Not Found');
            }
            
            console.log('send form to client');

            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            res.end();
        })
    }
}).listen(8080);