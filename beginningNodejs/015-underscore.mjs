/*
 * node js core lib underscore (precedent of lodash) 
 */

import _ from 'underscore';

const arr1 = [1, 2, 3, 6, 8, 10, 51, 100, 201, 907, 13];

const result1 = _.filter(arr1, (e) => {return e > 100});
console.log(result1);

const result2 = _.map(result1, (e) => {return e*2});
console.log(result2);

const result3 = _.reject(arr1, (e)=>{return e%2 ==0});
console.log(result3);

console.log(_.min(arr1));
console.log(_.max(arr1));