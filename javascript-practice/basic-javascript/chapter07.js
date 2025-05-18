// 1. 대입연산자
let var1 = 1;
const var2 = 3;

// var2 = 4;  // TypeError : Assignment to constant variable.
// console.log(var2);

// 2. 산술연산자
let num1 = 3 + 1;
let num2 = 4 - 1;
let num3 = 12 * 1;
let num4 = 13 / 3;
let num5 = 13 % 3;
let num6 = (12 + 12) * 2;
let num7 = 12 + 12 * 2;

console.log(num4);
console.log(num5);
console.log(num6); // expect : 48
console.log(num7); // expect : 36

// 3. 복합 대입 연산자
let num8 = 10;
num8 += 10;
console.log(num8); // expect : 20

num8 -= 10;
console.log(num8); // expect : 10

num8 *= 3;
console.log(num8); // expect : 30

// 4. 증감 연산자
num9 = 11;
num9++;
console.log(num9); // expect : 12

console.log(++num9); // expect : 13  전위연산
console.log(num9++); // expect : 13  후위연산
console.log(num9); // expect : 14

console.log(--num9); // expect : 13  전위연산
console.log(num9--); // expect : 13  후위연산
console.log(num9); // expect : 12

console.log(num9 ** 2); // expect : 12^2 === 12 * 12 === 144
console.log(num9 ** 3); // expect : 12^3 === 12 * 12 * 12 === 1728

// 논리 연산자
let or = true || false;
let and = true && false;
let not = !true;

console.log(or); // expect : true
console.log(and); // expect : false
console.log(not); // expect : false

// 비교 연산자
let comp1 = 1 === 2;
let comp2 = 1 !== 2;

console.log(comp1); // expect : false
console.log(comp2); // expect : true

// - 자료형까지 비교하지 않게 됨
let comp3 = 1 == "1";
console.log(comp3); // expect : true

let comp4 = 2 != "2";
console.log(comp4); // expect : false

let comp5 = 1 > 0;
let comp6 = 2 < 0;
let comp7 = 1 >= 1;
let comp8 = 2 <= 0;

console.log(comp5); // expect : true
console.log(comp6); // expect : false
console.log(comp7); // expect : true
console.log(comp8); // expect : false
