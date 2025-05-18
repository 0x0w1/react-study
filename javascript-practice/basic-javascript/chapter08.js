// 1. null 병합 연산자
// -> 존재하는 값인지 추려냄 (null, undefined가 아닌 값을 찾아냄)

let var1; // undefined
let var2 = 10;
let var3 = 20;

let var4 = var1 ?? var2;
let var5 = var1 ?? var3;
let var6 = var2 ?? var3;

let var7 = var1 ?? null; // 앞의 데이터가 null 혹은 undefined이면 뒤의 데이터를 가져옴 python의 or 연산자로 저장하는 것 과 같음
let var8 = null ?? var1; // 앞의 데이터가 null 혹은 undefined이면 뒤의 데이터를 가져옴 python의 or 연산자로 저장하는 것 과 같음

console.log(var4); // expect : var2 === 10;
console.log(var5); // expect : var3 === 20;
console.log(var6); // expect : var2 === 10;
console.log(var7); // expect : null
console.log(var8); // expect : var1 === undefined

// 2. Typeof 연산자

let typeVar1 = "string";
let t1 = typeof typeVar1;

let typeVar2 = 10;
let t2 = typeof typeVar2;

console.log(t1); // expect : string;
console.log(t2); // expect : number;

// 1. 삼(3)항 연산자

let var10 = 10;
// 요구사항 : 변수 res에 var10 의 값을 "짝"이라고 저장하고 홀수일 경우 "홀"이라고 저장한다.
let res = var10 % 2 === 0 ? "짝" : "홀";
console.log(res); // expect 짝
