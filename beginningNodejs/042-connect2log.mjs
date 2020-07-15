/*
 * node js module connect, with logs of request method and url
 * usage: $ curl http://127.0.0.1:3000/ -d "hello world!"
 *          hello world!

 */

import connect from 'connect';
import util from 'util';

function logit(req, res, next){
    util.log(util.format('Request received: %s, %s', req.method, req.url));
    req.pipe(res);
    next();
}

connect().use(logit).listen(3000);
