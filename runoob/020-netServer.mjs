/*
 * node js net module, server
 */

import net from 'net';

const server = net.createServer((connection)=>{
    console.log('client connected');
    connection.on('end', ()=>{
        console.log('client closed');
    });

    connection.write('Hello world!\n');
    connection.pipe(connection);
});

server.listen(8080, ()=>{
    console.log('server is listening');
})