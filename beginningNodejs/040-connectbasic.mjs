/*
 * node js module connect 
 */

import connect from 'connect';
import http from 'http';

const app = connect();
console.log(app);

http.createServer(app).listen(3000);
console.log('Server running at port 3000');
