// Spread 연산자
// 객체나 배열에 저장된 여러 개의 값을 개별로 흩뿌려주는 역할
let arr1 = [1, 2, 3, 7, 8, 9, 0];
let arr2 = [4, 5, 6];

// let arr3 = [4, arr1[0], arr1[1], arr1[2], 5, 6]; // Not recommanded...
let arr3 = [4, ...arr1, 5, 6];
console.log(arr3);

let obj1 = {
    a: 1,
    b: 2,
    // e: 5,
};

let obj2 = {
    c: 3,
    d: 4,
};

let obj3 = {
    ...obj1,
    ...obj2,
};
console.log(obj3);

function funcA(p1, p2, p3) {
    console.log(p1, p2, p3);
}
funcA(...arr1);

function funcB(p1, p2, p3, p4) {
    console.log(p1, p2, p3, p4);
}
funcB(...arr1);

// 2. Rest 매개변수
function funcC(...args) {
    console.log(args);
}

funcC(...arr1);
funcC(...arr2);
// funcC(...obj3);  TypeError: Spread syntax requires.

function funcD(one, ...args) {
    console.log(`one : ${one}`);
    // console.log(`args : ${JSON.stringify(args, null, 2)}`);
    console.log(`args : ${args}`);
}
funcD(...arr1);
funcD(...arr2);
// funcD(...obj2);  TypeError: Spread syntax requires.

function funcE({ ...args }) {
    console.log(args);
}
funcE(obj3);

function funcF({ a: myA, ...args }) {
    console.log(`a : ${myA}`); // a의 값을 myA에 저장
    console.log(`args : ${JSON.stringify(args, null, 2)}`); // 나머지는 args로 적당히 받음
}
funcF(obj3);
