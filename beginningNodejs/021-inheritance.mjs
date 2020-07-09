/*
 * node js inheritance using prototype chain 
 */

// * 1. super class: Animal
// * 1.1. define instance variable

import util from 'util';

function Animal(name){
    this.name = name;
}

// * 1.2. define methods
Animal.prototype.walk = function(destination){
    console.log(this.name, 'is walking to', destination);
}

const animal = new Animal('elephant');
animal.walk('melin');


// * 2. sub class: Bird
// * 2.1. define instance variable
function Bird(name){
    // return new Animal(name);
    Animal.call(this, name);
}

// * 2.2. inherit methods
// ! can NOT do sub.prototype = super.prototyep, if did this, modification on
// ! sub prototype will CHANGE super prototype. as well!

// * 2.2.1. copy super prototype then assign copy to sub prototype
// Bird.prototype = Object.create(Animal.prototype);

// * 2.2.2. assign super prototype to sub grand prototype
// ! or like this, set to sub.prototype.__proto__ = super.prototype
// Bird.prototype.__proto__ = Animal.prototype;

// * 2.2.3. using util library
util.inherits(Bird, Animal);

const bird = new Bird('Eagle');
bird.walk('sky');
