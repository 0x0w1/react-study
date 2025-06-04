// math module

function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

// Common js module system.
// module.exports = {
//     add, // add: add 와 같은 의미
//     sub,
// };

// ES module system.
export { add, sub };
