/*
 * node js common tool: util
*/

import util from 'util';

console.log('1. util.callbackify');
async function say(){
    return '1. hello world';
}

const callbackFn = util.callbackify(say);

callbackFn((err, ret) => {
    if(err) throw err;
    console.log(ret);
})

console.log('\n2. util.inherits()');
function Base(){
    this.name = 'base';
    this.base = 2000;
    this.sayHello = function(){
        console.log(`Hello ${this.name}`);
    };
}

Base.prototype.showName = function(){
    console.log(this.name);
}

function Sub(){
    this.name = 'sub';
}

util.inherits(Sub, Base);

let baseObj = new Base();
baseObj.sayHello();
console.log(baseObj);

let subObj = new Sub();
console.log(subObj);

console.log('\n3. util.inspect');
console.log(util.inspect(baseObj, true, 2, true));
console.log(util.inspect(subObj, true, 2, true));