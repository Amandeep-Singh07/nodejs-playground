// setTimeout(() => {
//     console.log('This message is displayed after 2 seconds');
// }, 2000);

// now we will implement setInterval

// const repeatedFunction = () => {
//     console.log('Repeated function executed');
// };

// const intervalId = setInterval(repeatedFunction, 1000);// executes every 1 second
// console.log(intervalId); // prints the interval ID

// now learning clearInterval

// function to be executed at intervals
// function repeatedFunction() {
//     console.log('executing repeated function...');
// }
// // set an interval (execute repeatedFunction every 1 second)
// const intervalId = setInterval(repeatedFunction, 1000);

// /// Afer some time we want to stop the interval
// setTimeout(() => {
//     clearInterval(intervalId); // stops the interval
//     console.log('Interval stopped');
// }, 5000);

// The difference between setTimeout and setInterval is that setTimeout executes a function once after a specified delay, while setInterval repeatedly executes a function at specified intervals until it is stopped.

// what is callback hell ?
// Callback hell occurs when multiple nested callbacks make the code difficult to read and maintain. It often happens in asynchronous programming when each operation depends on the result of the previous one, leading to deeply nested structures.

// how we can solve callback hell ?
// Callback hell can be mitigated by using techniques such as Promises, async/await syntax, or modularizing code into smaller functions to improve readability and maintainability.

// Example of Callback Hell:

// function loginUser(username, callback) {
//   setTimeout(() => {
//     console.log("User logged in");
//     callback({ id: 1, username });
//   }, 1000);
// }

// function getUserProfile(user, callback) {
//   setTimeout(() => {
//     console.log("Profile fetched");
//     callback({ ...user, role: "admin" });
//   }, 1000);
// }

// function getUserPosts(profile, callback) {
//   setTimeout(() => {
//     console.log("Posts fetched");
//     callback(["Post1", "Post2"]);
//   }, 1000);
// }

// // 🚨 Callback Hell
// loginUser("Aman", function (user) {
//   getUserProfile(user, function (profile) {
//     getUserPosts(profile, function (posts) {
//       console.log("User Posts:", posts);
//     });
//   });
// });

// // Solution using Promises to avoid Callback Hell:

// function loginUser(username) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("User logged in");
//       resolve({ id: 1, username });
//     }, 1000);
//   });
// }

// function getUserProfile(user) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Profile fetched");
//       resolve({ ...user, role: "admin" });
//     }, 1000);
//   });
// }

// function getUserPosts(profile) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("Posts fetched");
//       resolve(["Post1", "Post2"]);
//     }, 1000);
//   });
// }

// loginUser("Aman")
//   .then((user) => getUserProfile(user))
//   .then((profile) => getUserPosts(profile))
//   .then((posts) => {
//     console.log("User Posts:", posts);
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });

/////

//// ******************************Events in JavaScript*******************************/////     });

// const EventEmitter = require('events');     // eventEmitter class imported
// const emitter = new EventEmitter();      // emitter object created

// // function greet(name) {
// //     console.log(`Hello, ${name}! Welcome to the event-driven world of Node.js.`);
// // }   // greet function defined

// // another way to define function
// const greet = (name) => {
//     console.log(`Hello, ${name}! Welcome to the event-driven world of Node.js.`);
// };

// // another way
// // emitter.on("hello", (name) => {
// //      console.log(`Hello event triggered for ${name}`);
// //  })

// emitter.on('greetEvent', greet);   // listener registered for 'greetEvent'
// emitter.once('greetEvent', greet); // used once listener for 'greetEvent' for one time execution

// emitter.emit("greetEvent","amandeep");  // event emitted with data
// emitter.emit("greetEvent", "Arnav");  // event emitted with data
// emitter.removeListener("greetEvent", greet); // removing listener
// emitter.emit("greetEvent", "Akash");  // event emitted with data but no listener now

// In this example, we create an EventEmitter instance, define a greet function, register it as a listener for the 'greetEvent', and emit the event with different names. The greet function will be called each time the event is emitted until the listener is removed.

// A question that start emitting the evernt again and again but it should respond only for first four times

// const EventEmitter = require('events');
// const emitter = new EventEmitter();
// let count = 0;

// emitter.on('limitedEvent', (data) => {
//     if (count < 4) {
//         console.log(`Event received with data: ${data}`);
//         count++;
//     } else {
//         console.log('Event limit reached. No further processing.');
//     }
// });

// Emitting the event multiple times using a loop
// for (let i = 1; i <= 10; i++) {
//     emitter.emit('limitedEvent', `Data ${i}`);
// }

// // Emitting the event multiple times using setInterval
// const intervalId = setInterval(() => {
//     if (count < 4) {
//         emitter.emit('limitedEvent', `Data ${count + 1}`);
//     } else {
//         clearInterval(intervalId); // Stop emitting after reaching the limit
//     }
// }, 1000);

// Classwork

///////////*********************** STREAMS********************************** */

// Readable stream
// // Default chunk value is 64kb

// const fs = require("fs");

// // const readStream = fs.createReadStream(__dirname + "/input.txt", {encoding: "utf-8",highWaterMark:10});
// const readStream = fs.createReadStream(__dirname + "/input.txt", {encoding: "utf-8"});

// readStream.on("data", (chunk) => {
//   console.log("chunk recieved")
//   console.log(chunk);
// });

// readStream.on("end", () => {
//   console.log("file read operation completed");
// })

// writable stream

// what is system call ?
// system call is a request for service made by a program to the operating system.

// const fs = require("fs");

// const writeStream=fs.createWriteStream(__dirname+"/output.txt",{encoding:"utf-8"});

// writeStream.write("Hello world\n");
// writeStream.write("This will come in 2nd line\n");
// writeStream.write("Hello world\n");
// writeStream.write("Hello world\n");
// writeStream.write("Hello world\n");
// writeStream.end();

// writeStream.on("finish",()=>{
//     console.log("file write operation completed");
// })
// finish event will only happen when we call end method.

// write a program to copy data from input.txt to output.txt using streams

// const fs = require("fs");

// const readStream = fs.createReadStream(__dirname + "/input.txt", { encoding: "utf-8" });
// const writeStream = fs.createWriteStream(__dirname + "/output.txt", { encoding: "utf-8" });

// fs.readFile(__dirname + "/input.txt", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     writeStream.write(data);
//   }
// });

// one more way

// const fs = require("fs");

// const readStream = fs.createReadStream(__dirname + "/input.txt", { encoding: "utf-8" });
// const writeStream = fs.createWriteStream(__dirname + "/output.txt", { encoding: "utf-8" });

// readStream.on("data", (chunk) => {
//   console.log("chunk recieved");
//   console.log(chunk);
//   writeStream.write(chunk);
// });

// readStream.on("end", () => {
//   console.log("file read operation completed");
// })

// writeStream.on("finish", () => {
//   console.log("file write operation completed");
// })

// what is pipe method ?
// pipe method is used to connect readable stream to writable stream.

// one more way to copy data from input.txt to output.txt using pipe method
// const fs = require("fs");

// const readStream = fs.createReadStream(__dirname + "/input.txt", { encoding: "utf-8" });
// const writeStream = fs.createWriteStream(__dirname + "/output.txt", { encoding: "utf-8" });

// readStream.pipe(writeStream);

// // reading the data
// const fs = require("fs");

// console.log("this is line before readfile")
// const data = fs.readFileSync(__dirname + "/input.txt", { encoding: "utf-8" }); // it is a blocking operation
// fs.readFile(__dirname + "/input.txt", { encoding: "utf-8" }, (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });

// console.log(data);
// console.log("this is line after readfile")

// writing to the file
// const fs = require("fs");

// console.log("this is line before writefile")
// fs.writeFileSync(__dirname + "/input.txt", "hi hello world", { encoding: "utf-8" });
// console.log("this is line after writefile")

// now with async version
// fs.writeFile(__dirname + "/input.txt", "hi hello world", { encoding: "utf-8" }, (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("file write operation completed");
//   }
// });


// write a program to copy data from input.txt to output.txt using readfile and writefile in async way

// below is  a example of callback hell
// const fs = require("fs");

// fs.readFile(__dirname + "/input.txt", "utf-8" , (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     fs.writeFile(__dirname + "/output.txt", data, "utf-8", (err) => {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log("file write operation completed");
//       }
//     });
//   }
// });

// let's solve the above problem using promises
// const fs = require("fs/promises");

// fs.readFile(__dirname + "/input.txt", "utf-8")
//   .then((data) => {
//     fs.writeFile(__dirname + "/output.txt", data, "utf-8");
//   })
//   .then(() => {
//     console.log("file write operation completed");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// write a program to copy data from input.txt to output.txt using readfile and writefile in synchronous way

// const fs = require("fs");

// const data = fs.readFileSync(__dirname + "/input.txt","utf-8");
// fs.writeFileSync(__dirname + "/output.txt", data, "utf-8" );



/// ******************************** JSON *********************************************

// const fs = require("fs");

// fs.readFile(__dirname + "/data.json", "utf-8", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("JSON formatted data:", data);
//     const parsedData = JSON.parse(data);
//     // console.log("Parsed data:", parsedData);
//     console.log(JSON.stringify(parsedData));
//   }
// });


// **************** Compressing the data **********************************************

// const fs = require("fs");
// const zlib = require("zlib");

// const readStream = fs.createReadStream(__dirname + "/input.txt");
// const gz = zlib.createGzip();
// const writeStream = fs.createWriteStream(__dirname + "/input.txt.gz");

// readStream.on("data", (chunk) => {
//   gz.write(chunk);
// })

// gz.on("data", (Compressedchunk) => {
//   writeStream.write(Compressedchunk);
// });

// readStream.on("end", () => {
//   gz.end();
// });

// gz.on("end", () => {
//   writeStream.end();
//   console.log("file compression completed");
// });

// ******************************** Decompressing the data **********************************************
// const fs = require("fs");
// const zlib = require("zlib");

// const readStream = fs.createReadStream(__dirname + "/input.txt.gz");
// const gz = zlib.createGunzip();
// const writeStream = fs.createWriteStream(__dirname + "/output1.txt");

// readStream.on("data", (chunk) => {
//   gz.write(chunk);
// });

// gz.on("data", (decompressedchunk) => {
//   writeStream.write(decompressedchunk);
// });

// readStream.on("end", () => {
//   gz.end();
// });

// gz.on("end", () => {
//   writeStream.end();
//   console.log("file decompression completed");
// });

// ***** doing the same using pipe method **********************************************

// const fs = require("fs");
// const zlib = require("zlib");

// const readStream = fs.createReadStream(__dirname + "/input.txt");
// const gz = zlib.createGzip();
// const writeStream = fs.createWriteStream(__dirname + "/input.txt.gz");

// readStream.pipe(gz).pipe(writeStream);

// writeStream.on("finish", () => {
//   console.log("file compression completed");
// });

// ***** doing the same with decompression using pipe method **********************************************

// const fs = require("fs");
// const zlib = require("zlib");

// const readStream = fs.createReadStream(__dirname + "/input.txt.gz");
// const gz = zlib.createGunzip();
// const writeStream = fs.createWriteStream(__dirname + "/output1.txt");

// readStream.pipe(gz).pipe(writeStream);

// writeStream.on("finish", () => {
//   console.log("file decompression completed");
// });

///**********************Implementing http services in node js ********************************/

// const http = require("http");

// const server = new http.Server();

// server.on("request", (req, res) => {
//   console.log(req.httpVersion)
//   if (req.url === "/") {
//     res.write("Hello World");
//     res.end(); // whenever we are using write method we need to use end method to end the response otherwise the server will keep running and will not send the response
//   } else if (req.url === "/about") {
//     res.write("About Page");
//     res.end();
//   } else {
//     res.write("Page Not Found");
//     res.end();
//   }
// });

// server.listen(3000, () => {
//   console.log("Server is running on port 3000");
// })


///////////Another way to create server in node js //////////////////////////////////////////////////////

const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Hello World");
    res.end();
  } else if (req.url === "/about") {
    res.write("About Page");
    res.end();
  } else {
    res.write("Page Not Found");
    res.end();
  }
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});


























