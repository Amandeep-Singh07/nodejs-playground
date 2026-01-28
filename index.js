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
function repeatedFunction() {
    console.log('executing repeated function...');
}
// set an interval (execute repeatedFunction every 1 second)
const intervalId = setInterval(repeatedFunction, 1000);

/// Afer some time we want to stop the interval
setTimeout(() => {
    clearInterval(intervalId); // stops the interval
    console.log('Interval stopped');
}, 5000);