/*
 * P.29 Listing 2-24
 * compare with 003 and 004
 */

 const fibonacci = (n) => {
     if(n <2){
         return 1;
     }else{
         return fibonacci(n-2) + fibonacci(n-1);
     }
 }

 console.time('timer');
 setTimeout(() =>{
     console.timeEnd('timer');
 },1000);

 fibonacci(44);
