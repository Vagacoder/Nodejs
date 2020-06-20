/*
 * node js, restful api, list users
*/

import express from 'express';
import fs from 'fs';

const app = express();

app.get('/listusers', (req, res) =>{

    const newUser = {
        user4: {
            name: 'alex',
            password: 'pass4',
            profession: 'teacher',
            id: 4,
        }
    };

    fs.readFile( './data/' + 'user.json', 'utf-8', (err, data)=>{
        data = JSON.parse(data);
        data.user4 = newUser.user4;
        console.log(data);
        res.end(JSON.stringify(data));
    });
})

app.get('/:id', (req, res) =>{
    fs.readFile('./data/' + 'user.json', 'utf-8', (err, data)=>{
        data = JSON.parse(data);
        console.log(req.params);
        console.log(req.params.id);
        const user = data['user' + req.params.id]
        console.log('user', user);
        res.end(JSON.stringify(user));
    });
});

app.get('/deleteuser/:id', (req, res) =>{
    fs.readFile('./data/' + 'user.json', 'utf-8', (err, data)=>{
        data = JSON.parse(data);
        console.log(req.params);
        console.log(req.params.id);
        delete data['user' + req.params.id]
        console.log(data);
        res.end(JSON.stringify(data));
    });
});

const server = app.listen(8080, ()=>{
    const host = server.address().address;
    const port = server.address().port;

    console.log(`App visiting address: http://${host}:${port}`);
});
