/*
 * node js, inheritance using Object.create() 
 */

 // * 1. good way, with a minor problem, Bird.prototype.constructor is lost
function Animal(name){
    this.name = name;
};

Animal.prototype.walk = function(){
    console.log(this.name + ' is walking');
};

function Bird(name){
    Animal.call(this, name);
};

Bird.prototype = Object.create(Animal.prototype);

Animal.prototype.bark = function(){
    console.log(this.name + ' is barking');
};

Bird.prototype.walk = function(){
    console.log(this.name + ' can Not walk well');
}

console.log('1. testing Animal and Bird class');
const eagle = new Bird('eagle');
eagle.walk();
eagle.bark();

const dog = new Animal('dog');
dog.walk();
dog.bark();

// * 2. here is the problem, Bird's constructor is pointing to Animal
console.log('\n2. here is problem:');
console.log('eagle\'s constructor:', eagle.constructor);
console.log('dog\'s constructor:', dog.constructor);

// * 3. fix it
Bird.prototype = Object.create(Animal.prototype, {
    constructor:{
        value: Bird,
        enumerable: false,
        writable: true,
        configurable: true
    }
});

const falcon = new Bird('falcon');
console.log('\n3. fix the problem:');
console.log('falcon\'s constructor:', falcon.constructor);
