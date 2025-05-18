// 1. 객체 생성
// 객체 생성자와 객체 리터럴을 쓰는 방법입니다.

let obj1 = new Object(); //객체 생성자
let obj2 = {}; // 객체 리터럴

let person = {
  // object
  name: "황금별", // 해당 property의 key는 name, value는 "황금별"
  age: 31,
  hobby: "Game",
  job: "Backend Engineer",
  extra: {},
  10: 20,
  "like cat": true,
};

let name = person.name;
console.log(name);

let undefinedName = person.name2;
console.log(undefinedName); // expected : undefined

let age = person["age"];
console.log(age);

let undefinedAge = person["age2"];
console.log(undefinedAge);

let hobbyProperty = "hobby";
console.log(person[hobbyProperty]);

let stringProperty = "like cat";
console.log(person[stringProperty]);

console.log(person.job);
person.job = "BE Dev"; // change!!
console.log(person.job);

person.favoriteFood = "치킨";
console.log(person);

person["nickName"] = "owl";
console.log(person.nickName);

delete person.job;
delete person["favoriteFood"];
console.log(person);

// 프로퍼티 존재 유뮤 확인
let result1 = "name" in person;
console.log(result1);

let result2 = "name2" in person;
console.log(result2);

let result3 = "황금별" in person;
console.log(result3);
