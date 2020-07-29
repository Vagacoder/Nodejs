/*
 * node js, module express, express.Router(), which is like a mini Express application

 * $ curl http://127.0.0.1:3000/todo
{"status":"Items found","items":[]}

 * $ curl http://127.0.0.1:3000/todo -H "content-type: application/json" -d "{\"description\":\"test\"}"
{"status":"Item added","itemId":0}

 * $ curl http://127.0.0.1:3000/todo/0
{"status":"Item found","item":{"description":"test"}}

 * $ curl http://127.0.0.1:3000/todo/
{"status":"Items found","items":[{"description":"test"}]}

 * $ curl http://127.0.0.1:3000/todo/ -X DELETE
{"status":"Items cleared"}

 * $ curl http://127.0.0.1:3000/todo/
{"status":"Items found","items":[]}

 * $ curl http://127.0.0.1:3000/todo -X PUT -H "content-type: application/json" -d "[{\"description\":\"test\"}]"
{"status":"Items replaced"}

 * $ curl http://127.0.0.1:3000/todo/
{"status":"Items found","items":[{"description":"test"}]}

 * $ curl http://127.0.0.1:3000/todo/0 -X DELETE
{"status":"Not implemented"}

 */

import express from 'express';
import bodyParser from 'body-parser';

let items = [];

const router = express.Router();
router.use(bodyParser());

router.route('/')
        .get(function(req, res, next){
            res.send({
                status: 'Items found',
                items: items
            });
        })
        .post(function(req, res, next){
            items.push(req.body);
            res.send({
                status:'Items add',
                itemId: items.length-1
            });
        })
        .put(function(req, res, next){
            items = req.body;
            res.send({
                status: 'Items replaced'
            });
        })
        .delete(function(req, res, next){
            items = [];
            res.send({status: 'Items cleared'});
        });
    
router.route('/:id')
        .get(function(req, res, next){
            const id = req.params['id'];
            if(id && items[Number(id)]){
                res.send({
                    status: 'Item found',
                    item: items[Number(id)]
                });
            }else{
                res.send(404, {status: 'Not found'});
            }
        })
        .all(function(req,res,next){
            res.send(501, {status: 'Not implemented'});
        });

const app = express().use('/todo', router).listen(3000);
