/*
 * node js, module express, basic http server 
 */

import express from 'express';
import http from 'http';

const app = express().use(function (req, res, next) {
    res.end('hello express!');
});

http.createServer(app).listen(3000);

