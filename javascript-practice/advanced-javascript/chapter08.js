// 5가지의 요소 순회 및 탐색 매서드
// 1. forEach -> 배열의 모든 요소를 순회하면서 각 요소에 특정 동작을 수행시키는 매서드
let arr1 = [1, 2, 3];
console.log("Basic version.");
arr1.forEach(function (value) {
    console.log(value);
});

console.log("Simple version.");
arr1.forEach((value) => {
    console.log(value);
});

let doubledArr = [];
arr1.forEach((value) => {
    doubledArr.push(value * 2);
});
console.log(doubledArr);

// 2. includes
// 배열에 특정 요소가 있는지 확인하는 메소드
let arr2 = [1, 2, 3];
let isInclude = arr2.includes(3);

console.log(isInclude);
let isInclude10 = arr2.includes(10);
console.log(isInclude10);

// 3. indexOf
// 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드
let arr3 = [1, 2, 3];
let index = arr3.indexOf(1);
console.log(index);

let arr4 = [1, 1, 1, 2, 3, 3, 3, 4, 4, 4, 4, 5];
console.log(arr4.indexOf(3));

let objectArr = [{ name: "황금별" }, { name: "대황금별" }];
console.log("객체 찾기 : ", objectArr.indexOf({ name: "황금별" })); // 찾을 수 없음

// 4. findIndex
// 모든 요소를 순회하면서 콜백함수를 만족하는 메소드
const findedIndex = arr4.findIndex((item) => {
    if (item === 2) return true;
});
console.log(findedIndex); // 2인 값은 index가 3에 있음

const findedIndexNotExists = arr4.findIndex((item) => {
    if (item === 10) return true;
});
console.log(findedIndexNotExists); // 없으면 -1 반환

const findedObjectIndex = objectArr.findIndex((obj) => {
    if (obj.name === "황금별") return true;
});
console.log("object 찾기를 위한 findIndex : ", findedObjectIndex);

// 5. find
console.log(objectArr.find((item) => item.name === "대황금별")); //index가 아닌 value를 반환함
