// math module

export function add(a, b) {
    return a + b;
}

export function sub(a, b) {
    return a - b;
}

// Common js module system.
// module.exports = {
//     add, // add: add 와 같은 의미
//     sub,
// };

// ES module system.
// export { add, sub };
// function 앞에 export가 export로 별도로 선언하지 않아도 됨.

export default function multiply(a, b) {
    return a * b;
}
