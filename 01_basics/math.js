// here we are understanding module exports and imports in Node.js
// refer to hello.js for how these functions are imported and used
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}

module.exports = { add, subtract };

