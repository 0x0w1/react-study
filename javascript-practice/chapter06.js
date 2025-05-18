// 1. 묵시적 형 변환
let num = 10;
let str = "20";

const result = num + str;
console.log(`${result} type is ${typeof result}`);

// 2. 명시적 형 변환
let str1 = "10";
let strToNum1 = Number(str1);

console.log(`strToNum1(${typeof strToNum1}) : ${strToNum1}`);

let str2 = "10개";
let strToNum2 = Number(str2);
console.log(`strToNum2(${typeof strToNum2}) : ${strToNum2}`);

let strToNum2Fixed = Number(parseInt(str2));
console.log(`strToNum2Fixed(${typeof strToNum2Fixed}) : ${strToNum2Fixed}`);

console.log(strToNum1 + "입니다."); // 묵시적
console.log(String(strToNum1) + "입니다."); // 명시적
