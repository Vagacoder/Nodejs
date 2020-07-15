/*
 * node js module connect,
 * 1. simple, connect().listen()
 * 2. use() on a connect dispatcher of no operation
 */

import connect from 'connect';

const app = connect()
    .use(function(req, res, next){ next();})
    .listen(3000);
console.log('Server is running at port 3000');
