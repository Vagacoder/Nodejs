/*
 * node js, readable stream raise event 'readable' when there is new data to read
 * useage: $ echo 'something' | node 033-reabalestream.mjs
 * useage: $ node 033-reabalestream.mjs < data/log.txt
 */

process.stdin.on('readable', function(){
    let buf = process.stdin.read();
    if(buf != null){
        console.log('Got:');
        process.stdout.write(buf.toString());
    }else{
        console.log('Read complete!');
    }
});
