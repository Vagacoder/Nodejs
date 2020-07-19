/*
 * node js, module connect
 * middleware chaining 2. authorization
 */

import connect from 'connect';

// * middleware
function auth(req, res, next){

    // * helper function to reject request, rejection contain WWW-Authenticate header
    function send401(){
        res.writeHead(401, {'WWW-Authenticate': 'Basic'});
        res.end();
    }

    // * check header, if no authorization, send 401
    let authHeader = req.headers.authorization;
    if(!authHeader){
        send401();
        return;
    }

    // * parse username and password
    console.log(authHeader);
    let auth = new Buffer(authHeader.split(' ')[1], 'base64').toString().split(':');
    const user = auth[0];
    const pass = auth[1];

    // * check username and password
    if(user === 'foo' && pass === 'bar'){
        next()
    }else{
        send401();
    }

};

const app = connect()
                .use('/admin', auth)
                .use('/admin', function(req, res){res.end('Authorized!')})
                .use(function(req, res){res.end('Public!');})
                .listen(3000);
