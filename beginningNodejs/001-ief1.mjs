/*
 * immediately executing function
 * 
 * Purpose: to create a new variable scope.
 * In javascript, if, else or while caluse does NOT create a new variable scope.
 * 
 * Before ES6, only recommended way to create a new scope is using a function
 * 
 * For ES6 always using const or let instead of var
 * 
*/
console.log('in ES6');
let foo = 123;
if(true){
    let foo = 456;
}
console.log('foo:', foo);

console.log('before ES6');
var bar = 999;
if(true){
    var bar = 0;
}
console.log('bar:', bar);

if(true){
    if(true){
        (function(){
            var bar = 888;
        })();
    }
}
console.log('bar:', bar);
