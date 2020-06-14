/*
 * node js global object: process
*/

// * setup events listeners
process.on('exit', (code) => {

    // ! this block of codes will not be executed
    setTimeout(() => {
        console.log("This block wont execut");
    })

    console.log(`Exit code: ${code}`);

});

process.on('beforeExit', (s) => {
    console.log('Exiting ...');
});

process.on('uncaughtException', (ex) =>{
    console.error(ex.message);
});

// * program execution here
process.stdout.write('Program starts\n');

process.argv.forEach((val, index) => {
    console.log(`${index}: ${val}`);
})

console.log(`current path: ${process.execPath}`);
console.log(`current platform: ${process.platform}`);
console.log(`current dir: ${process.cwd()}`);
console.log(`current memory usage: `, process.memoryUsage());
console.log(`current version: ${process.version}`);

process.stdout.write("\nDirect from process stdout\n\n");

console.log('program is done');
