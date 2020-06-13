/*
 * node js import / export modules 
 */

import Hello from './lib/hello.mjs';
import Hello1 from './lib/hello1.mjs';

const h = new Hello();
h.setName('Alex');
console.log('Hello.mjs ', h.sayHello());

const h1 = Hello1('Bob');
console.log('Hello1.mjs ', h1);

