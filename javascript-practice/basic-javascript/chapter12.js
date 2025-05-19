// 1. 일반 함수 표현식

let varA = funcA;
console.log(varA);

let varB = function () {
    console.log("BBBBB");
};

function funcA() {
    // 호이스팅 됨
    console.log("funcA");
}

varB();

// 2. 화살표 함수
let varC = () => {
    return 1;
};
console.log(varC); // 함수 선언된 걸 표시
console.log(varC()); // 함수 실행

let varD = () => 1;
console.log(varD); // 함수 선언된 걸 표시
console.log(varD()); // 함수 실행

// console.log(varE());  // 호이스팅 안 됨
let varE = (value1) => value1 * 10;
console.log(varE());
