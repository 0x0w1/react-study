// 1. 상수 객체
const animal = {
    type: "고양이",
    name: "나비",
    color: "black",
};

animal.age = 2;
animal.name = "까망이";
delete animal.color;

console.log(animal);

// animal = 123;  // TypeError : Assignment to constant variable.

// 2. 메소드 -> 값이 함수인 프로퍼티
const person2 = {
    name: "황금별22",
    sayHi: () => {
        console.log("Hiiiiiii!");
    },
    sayHello() {
        console.log("Helllooooo!!");
    },
};

person2.sayHi();
person2.sayHello();
person2["sayHi"]();
