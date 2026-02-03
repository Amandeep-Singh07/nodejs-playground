// now we will learn file handling in Node.js
const fs = require('fs'); // fs module imported
// fs module provides an API for interacting with the file system in a manner closely modeled around standard POSIX functions.

// // Sync write to a file (blocking)
// fs.writeFileSync('example.txt', 'Hello, this is a sample text file.');

// // Assync write to a file (non-blocking)
// fs.writeFile('example_async.txt', 'Hello, this is an async sample text file.', (err) => {
//     if (err) throw err;
//     console.log('Async file has been saved!');
// });

// // The difference between writeFileSync and writeFile is that the former is synchronous and blocks the execution until the file is written, while the latter is asynchronous and allows other operations to continue while the file is being written.

// // Read from a file (sync)
// const result = fs.readFileSync('contact.txt', 'utf8');
// console.log(result);

// // Read from a file (async)
// fs.readFile('contact.txt', 'utf8', (err, result) => {
//     if (err) throw err;
//     console.log(result);
// });

// So from the above examples we can see that sync methods can be store the result in a variable directly while async methods require a callback function to handle the result once it's available.

// // Append to a file
// fs.appendFileSync('test.txt', '\nAppended text.');

// fs.cpSync('test.txt', 'test_copy.txt'); // copy file

// fs.unlinkSync('test_copy.txt'); // delete file

// console.log(fs.statSync('test.txt')); // get file info

// fs.mkdirSync('my-docs'); // create directory

// learning blocking and non-blocking code in Node.js

// blocking...
// console.log(34);
// const result=fs.readFileSync('contact.txt','utf8');
// console.log(result);
// console.log(1);
// console.log(1);
// console.log(1);

// non-blocking...
// console.log(34);
// fs.readFile('contact.txt','utf8',(err,result)=>{
//     console.log(result);
// });
// console.log(1);
// console.log(1);
// console.log(1);
