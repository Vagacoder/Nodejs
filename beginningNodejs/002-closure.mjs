/*
 * Closure 
 * 
 * inner function (even returned) can access the variables in outer function
 */

function out(){
    let a = 'Hello';

    function inner(){
        console.log(a);
    };

    inner();

    return inner;
}

const fn = out();
fn();
