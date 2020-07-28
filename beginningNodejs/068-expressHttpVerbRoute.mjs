/*
 * node js, module express, http verb and route 

 * $ curl localhost:3000 -i
 * $ curl localhost:3000 -i -X PUT
 */

import express from 'express';

const app = express();

app.route('/')
   .all((req, res, next) =>{
       res.write('all\n');
       next();
   })
   .get((req, res, next) =>{
       res.end('get\n');
   })
   .put((req, res, next) =>{
       res.end('put\n');
   })
   .post((req, res, next) =>{
       res.end('post\n');
   })
   .delete((req, res, next) =>{
       res.end('delete\n');
   });

app.listen(3000);
