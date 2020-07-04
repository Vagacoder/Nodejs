/*
 * node js module moment 
 */

import moment from 'moment';

// * simple usage
console.log('1. Simple usage');
const wrapped = moment(new Date());
console.log(wrapped);

const date1 = wrapped.toDate();
console.log(date1);

// * From string to date
console.log('\n2. From string to date');
console.log(moment('12-25-2019', 'MM-DD-YYYY').toDate());
console.log(moment('12-25-19', 'MM-DD-YY').toDate());
console.log(moment('2020-07-04 4:30', 'YYYY-MM-DD HH:mm').toDate());
console.log(moment('2020-07-04 4:30:45 pm', 'YYYY-MM-DD HH:mm:ss a').toDate().toLocaleTimeString());

// * format
console.log('\n3. Format');
const date2 = new Date(2020, 1, 14, 15, 25, 50);
const wrapped2 = moment(date2);
console.log(wrapped2.format('"dddd, MMMM Do YYYY, h:mm:ss a"'));
console.log(wrapped2.format('ddd, hA'));

// * distance of date
const a = moment([2010, 0, 15]);
const b = moment([2010, 0, 16]);
const c = moment([2011, 0, 15]);

console.log(a.from(b));
console.log(a.from(c));
console.log(b.from(c));

console.log(b.from(a));
console.log(c.from(a));
console.log(c.from(b));


