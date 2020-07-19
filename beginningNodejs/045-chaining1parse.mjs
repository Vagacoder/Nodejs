/*
 * node js, module connect
 * middleware chaining 1, parse JSON 
 */

import connect from 'connect';

// * middleware parsing json in request
function parseJSON(req, res, next){
    // * if header shows its json, parse it, or pass to next middleware
    if(req.headers['content-type'] === 'application/json'){
        let readData = '';
        
        // * read stream
        req.on('readable', function(){
            if(req.read){
                readData += req.read();
            }
        });

        // * once read whole data, parse it to json object and attach to req.body
        req.on('end', function(){
            try{
                console.log(readData);
                // ? some reason, 'null' is added to end of string
                readData = readData.substring(0, readData.length-4);
                console.log(readData);
                req.body = JSON.parse(readData);
            }catch(err){
                console.error(err);
            }
            // * whether attach or not, pass it to next middleware
            next();
        })
    }else{
        next();
    }
}

const app = connect()
.use(parseJSON)
.use(function (req, res){
    if(req.body){
        res.end('JSON parsed!, value is: ' + JSON.stringify(req.body));
    }else{
        res.end('no JSON detected!');
    }
}).listen(3000);
