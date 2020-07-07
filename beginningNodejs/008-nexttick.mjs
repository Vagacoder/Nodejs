/*
 * node js process.nextTick(), taking a callback function, and put it into next
 * cycle of nodejs event loop
 */

import fibonacci from './lib/fibonacci.mjs';

process.nextTick(()=>{
    let f = 0;
    f = fibonacci(40);  // comment out this line, still executed after immediate
    console.log('next tick', f);
})
console.log('immediate');