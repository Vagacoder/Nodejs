/*
 * node js module DNS 
 */

 import dns from 'dns';

 dns.lookup('www.github.com', (err, address, family) => {
    console.log(`ip address: ${address}`);
    dns.reverse(address, (err, hostname) =>{
        if(err){
            console.error(err);
        }

        console.log(`reverse dns ${address}: ${JSON.stringify(hostname)}`);
    });
 });
 