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

function loginUser(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("User logged in");
      resolve({ id: 1, username });
    }, 1000);
  });
}

function getUserProfile(user) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Profile fetched");
      resolve({ ...user, role: "admin" });
    }, 1000);
  });
}

function getUserPosts(profile) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Posts fetched");
      resolve(["Post1", "Post2"]);
    }, 1000);
  });
}


loginUser("Aman")
  .then((user) => getUserProfile(user))
  .then((profile) => getUserPosts(profile))
  .then((posts) => {
    console.log("User Posts:", posts);
  })
  .catch((error) => {
    console.error("Error:", error);
  });


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



