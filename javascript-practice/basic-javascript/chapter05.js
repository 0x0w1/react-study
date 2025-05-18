// 1.Number type.
let num1 = 27;
let num2 = 1.5;
let num3 = -20;

// console.log(num1 + num2);
// console.log(num2 - num3);
// console.log(num1 / num3);
// console.log(num2 * num3);
// console.log(num1 % num2);

let inf = Infinity;
let mInf = -Infinity;

let nan = NaN; // Not a Number;

// console.log(1 * 'Hello'); // output : NaN (Not a Number)

// 2.String type.
let myName = "황금별";
let address = "서울 양천구 목동 111-11 내집 333호";

// console.log(myName + " / " + address);

// Template literal 문법
let introduceText = `${myName}은 ${address}에 거주합니다.`; // Backtick
// console.log(introduceText);

// 3. Boolean type.
let isSwitchOn = true;
let isEmpty = false;

// 4. Null type.
let empty = null;
let emptyString = "";

console.log(`empty === emptyString : ${empty === emptyString}`);

let none; // undefined.
console.log(none);

console.log(`empty === none : ${empty === none}`);

// Test
console.log(`!null : ${!null}`);
console.log(`!false : ${!false}`);
console.log(`!true : ${!true}`);
console.log(`!undefined : ${!undefined}`);
