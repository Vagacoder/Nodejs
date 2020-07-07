/*
 * node js, add function, getter/setter to prototype 
 * continue dissect module colors.
 */

// * original String prototype
console.log('1. Original String prototype');
console.log(String.prototype);

// * add a property to String prototype
console.log('\n2. Add a property to String prototype');
String.prototype.foo = 123
console.log('hello'.foo);

console.log(String.prototype);

// * add a function to String prototype
console.log('\n3. Add a function to String prototype');
String.prototype.red = function () {
    const redCode = '\x1b[31m';
    const clearCode = '\x1b[39m';
    return redCode + this + clearCode;
}

console.log('Hello'.red());

// * add a getter function to String prototype
console.log('\n4. Add a getter function to String prototype');
console.log('This behavior is same as node js module colors');
Object.defineProperty(String.prototype, 'green', {
    get: function(){
        const redCode = '\x1b[32m';
        const clearCode = '\x1b[39m';
        return redCode + this + clearCode;
    }
});

console.log('Hello'.green);

console.log('\nNote: functions for red/green can NOT be arrow functions!'.red());
