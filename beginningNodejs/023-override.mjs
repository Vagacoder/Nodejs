/*
 * node js override some parent functions, and keep other parent functions
 * by using syntax:

 ?  Parent.prototype.memberfunction.call(this, / * any original args * /) 

 */


import util from 'util';

function Super(){
    this.message = 'message';
};

Super.prototype.getMessage = function(){
    return this.message + ' from super';
};

function Sub(){
    Super.call(this);
};

util.inherits(Sub, Super);

Sub.prototype.getMessage = function (){
    return Super.prototype.getMessage.call(this) + ' from sub';
}

Sub.prototype.getEncryptedMessage = function (){
    return Super.prototype.getMessage.call(this) + ' encrypted by sub';
}

const sub1 = new Sub();
console.log(sub1.getMessage());
console.log(sub1.getEncryptedMessage());
