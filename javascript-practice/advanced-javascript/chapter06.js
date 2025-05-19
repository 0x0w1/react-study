// 반복문으로 배열과 객체 순회하기
let arr = [1, 2, 3];
let obj = {
    name: "황금별",
    age: 31,
    isMale: true,
};

// 배열 인덱스
console.log("기본 배열 인덱스 -----\n");
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// for (let i = 0; i < obj.length; i++) {
//     console.log(i);
// } // 출력 안 됨

// for of 반복문
console.log("for of 반복문 -----\n");
for (let item of arr) {
    console.log(item);
}

// for in 반복문
console.log("for in 반복문 -----\n");
for (let index in arr) {
    console.log(arr[index]);
}

// 객체 순회
console.log("기본 객체 순회 -----\n");
let keys = Object.keys(obj);
console.log("keys : ", keys);
for (let i = 0; i < keys.length; i++) {
    console.log(obj[keys[i]]);
}

console.log("for of 반복문 -----\n");
for (let key of keys) {
    console.log(key, obj[key]);
}

let values = Object.values(obj);
console.log("values : ", values);

for (let value of values) {
    console.log(value);
}

console.log("for in 반복문 -----\n");
for (let key in obj) {
    let value = obj[key];
    console.log(key, value);
}

// forEach 테스트
console.log("forEach 반복문 -----\n");
arr.forEach((element, index) => {
    // like python enumerate.
    console.log(`index : ${index}, element : ${element}`);
});

Object.entries(obj).forEach(([key, value]) => {
    console.log(`Key : ${key}, Value : ${value}`);
});
