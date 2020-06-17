/*
 * node js net module, client 
 */

 import net from 'net';

 const client = net.connect({port: 8080}, () =>{
     console.log('connected to server!');
 });

 client.on('data', (data) => {
     console.log(data.toString());
     client.end();
 });
 client.on('end', ()=>{
     console.log('disconnect from server');
 })