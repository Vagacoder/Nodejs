/*
 * node js, module connect, use object as middleware. object must have a handle function
 */

import connect from 'connect';

const echo = {
    handle: function(req, res, next){
        req.pipe(res);
    }
};

connect().use('/public', echo).listen(3000);
