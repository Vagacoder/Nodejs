/*
 * P.28 Listing 2-23 
 */

console.time('timeit');
const fibonacci = (n) =>{
    if(n < 2){
        return 1;
    }else{
        return fibonacci(n-2) + fibonacci(n-1);
    }
}
fibonacci(44);
console.timeEnd('timeit');
