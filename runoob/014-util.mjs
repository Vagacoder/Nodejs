/*
 * node js common tool: util
*/

import util from 'util';

async function say(){
    return 'hello world';
}

const callbackFn = util.callbackify(say);

callbackFn((err, ret) => {
    if(err) throw err;
    console.log(ret);
})
