/*
 * node js module colors 
 */

import colors from 'colors';

console.log('Using nodejs module colors');
console.log('line 1'.red);
console.log('line 2'.green);
console.log('line 3'.rainbow);

console.log('\nChange string color using ANSI escape codes');
const getRed = (str) =>{
    const redCode = '\x1b[31m';
    const clearCode = '\x1b[39m';
    return redCode + str + clearCode;
}

console.log(getRed('Hello world'));
