/*
 * node js, process, Signals 
 */

setTimeout(function(){
    console.log('5 seconds passed');
}, 5000);

console.log('Starting, will be done in 5 seconds');

process.on('SIGINT', function(){
    console.log('Ignore SIGINT...');
});
