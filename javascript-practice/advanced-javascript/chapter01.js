// 1. Falsy
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let f7 = 0n;

if (!f1) console.log("f1 is falsy");
if (!f2) console.log("f2 is falsy");
if (!f3) console.log("f3 is falsy");
if (!f4) console.log("f4 is falsy");
if (!f5) console.log("f5 is falsy");
if (!f6) console.log("f6 is falsy");
if (!f7) console.log("f7 is falsy");

// 2. Truthy
let t1 = "Hello";
let t2 = 123;
let t3 = [];
let t4 = {};
let t5 = () => {};

if (t1) console.log("t1 is truthy");
if (t2) console.log("t2 is truthy");
if (t3) console.log("t3 is truthy");
if (t4) console.log("t4 is truthy");
if (t5) console.log("t5 is truthy");

// 3. 활용사례
function printName(person) {
  //   if (person === undefined || person === null) {
  //     console.log("person의 값이 없음");
  //     return;
  //   }
  //   console.log(person.name);
  if (person && person.name) {
    console.log(person.name);
  }

  if (!person) {
    console.log("person의 값이 없음");
  }
}

let person = { name: "황금별" };
printName(person);

person = undefined;
// 만약 if문 처리되지 않을 경우 undefined --> TypeError: Cannot read properties of null
printName(person);
