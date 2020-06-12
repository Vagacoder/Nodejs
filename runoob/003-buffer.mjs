/*
 * Buffers, javascript has data types only for text, not for binary.
 * Node js define a class of buffer to store binary data.
 */

 console.log('1. define and create buffer');
 const buffer = Buffer.from('hello', 'ascii');
 console.log(buffer.toString('hex'));
 console.log(buffer.toString('base64'));

 const buf1 = Buffer.alloc(10);
 const buf2 = Buffer.alloc(10, 1);

 // ! allocUnsage() create a buffer, BUT not initialized (could contain old data).
 const buf3 = Buffer.allocUnsafe(10);

 const buf4 = Buffer.from([1,2,3]);
 const buf5 = Buffer.from('test');

 console.log('\n2. write to buffer');
 const length1 = buf1.write('Hello world', 2, 7, 'utf8');
 console.log(`writing #: ${length1}`);

 console.log('\n3. read from buffer');
 const content1 = buf1.toString();
 console.log(`read from buf1: ${content1}`);
 const content2 = buf1.toString('utf8', 3, 6);
 console.log(`read from buf1: ${content2}`);

 console.log('\n4. complete example of write and read');
 const buf6 = Buffer.alloc(26);
 for(let i = 0; i < 26; i++){
     buf6[i] = i + 97;
 }

 console.log(buf6.toString('ascii', 3, 9));
 console.log(buf6.toString('utf8', 3, 9));
 console.log(buf6.toString(undefined, 3, 9));

 console.log('\n5. buffer to JSON');
 const buf7 = Buffer.from([0x1, 0x2, 0x3, 0x4, 0x5]);
 const json = JSON.stringify(buf7);

 console.log(json);

 const copy = JSON.parse(json, (key, value) => {
     return value && value.type === 'Buffer' ? Buffer.from(value.data):value;
 });

 console.log(copy);

 console.log('\n6. concatenate buffers');
 const buf8 = Buffer.concat([buf5, buf6], 12);
 console.log(buf8.toString('ascii'));

 console.log('\n7. compare buffers');
 const buf9 = Buffer.from('text');
 console.log(`buf5 compared to buf9: ${buf5.compare(buf9)}`);
