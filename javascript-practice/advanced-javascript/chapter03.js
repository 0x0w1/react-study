// 1. 배열의 구조 분해 할당
let arr = [1, 2, 3];

// let one = arr[0];
// let two = arr[1];
// let thr = arr[2];

let [one, two, thr] = arr;
console.log(one, two, thr);

let [One, Two] = arr;
console.log(One, Two);

let [aOne, aTwo, aThr, aFour] = arr;
console.log(aOne, aTwo, aThr, aFour); // aFour === undefined;

// 2. 객체의 구조 분해 할당
let person = {
    name: "황금별",
    age: 27,
    hobby: "테니스",
};

let { name, age, hobby, extra = "Hello" } = person;
console.log(name, age, hobby, extra);

let {
    age: myAge, // person.age를 myAge에 저장한다.
    name: myName, // person.name의 값을 myName에 저장한다.
    extra: Extra = "Hello", // person.extra의 값을 Extra에 저장하는데, 없으면 "Hello"를 저장한다.
    hobby: myHobby, // person.hobby의 값을 myHobby에 저장한다.
} = person;

console.log(myAge, myName, Extra, myHobby);

const func = ({ name, age, hobby = "운동", extra = "Hellllloooo" }) => {
    console.log(name, age, hobby, extra);
};

func(person);
