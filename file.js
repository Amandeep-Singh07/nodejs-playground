// now we will learn file handling in Node.js
const fs = require('fs');

// Sync write to a file
fs.writeFileSync('example.txt', 'Hello, this is a sample text file.');

// Assync write to a file
fs.writeFile('example_async.txt', 'Hello, this is an async sample text file.', (err) => {
    if (err) throw err;
    console.log('Async file has been saved!');
});

// Read from a file (sync)
const result = fs.readFileSync('contact.txt', 'utf8');
console.log(result);

// Read from a file (async)
fs.readFile('contact.txt', 'utf8', (err, result) => {
    if (err) throw err;
    console.log(result);
});

// Append to a file
fs.appendFileSync('test.txt', '\nAppended text.');

fs.cpSync('test.txt', 'test_copy.txt'); // copy file

fs.unlinkSync('test_copy.txt'); // delete file

console.log(fs.statSync('test.txt')); // get file info

fs.mkdirSync('my-docs'); // create directory