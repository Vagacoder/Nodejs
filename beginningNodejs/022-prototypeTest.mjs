/*
 * node js prototype of class, object 
 */

const a = { 'b' : 123};
console.log(a);
console.log(a.prototype);

function Ai(){
    this.b = 456;
}

const ai1 = new Ai();
console.log('Note 1: __proto__ is everywhere.');
console.log('Note 2: while, prototype is only for function');
console.log('object ai1:', ai1);
console.log('object ai1.b:', ai1.b);
console.log('object\'s prototype:', ai1.prototype);
console.log('object\'s __proto__:',ai1.__proto__);
console.log('');
console.log('class\'s prototype:', Ai.prototype);
console.log('class\'s __proto__:', Ai.__proto__);
console.log('class\'s __proto__ === class\'s prototyep:',Ai.prototype === Ai.__proto__);
console.log('object\'s __proto__ === class\'s prototyep:',ai1.__proto__ === Ai.prototype);
console.log('object\'s __proto__ === class\'s __proto__:',Object.getPrototypeOf(ai1) === Ai.__proto__);
console.log('object\'s __proto__ === class\'s __proto__.__proto__:',Object.getPrototypeOf(ai1) === Ai.prototype.__proto__);


