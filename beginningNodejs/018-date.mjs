/*
 * node js, date format and json 
 */

const date1 = new Date();
const date2 = new Date(Date.UTC(2020, 7, 5, 14, 50));

console.log(date1);
console.log(date2);

console.log('original date:', date2);
const jsonStr = date2.toJSON();
console.log('toJSON:', jsonStr);

console.log('back to json:', new Date(jsonStr));
