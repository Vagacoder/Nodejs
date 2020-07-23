/*
 * node js, module express, simple http server without using http 
 */

import express from 'express';

express().use(function(req, res, next){ res.end('Hello!')}).listen(3000);
