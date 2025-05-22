// 1. push
// 배열 맨 뒤에 요소 추가
let arr1 = [1, 2, 3];
arr1.push(4);

console.log(arr1);

arr1.push(5, 6, 7);
console.log(arr1);

const newArr1 = arr1.push(8, 9, 0);
console.log("newArr1 : ", newArr1);
console.log("arr1 : ", arr1);

// 2.pop
// 배열 맨 뒤에 있는 요소를 제거하고 반환
const popedItem = arr1.pop();
console.log("popedItem : ", popedItem);
console.log("arr1 : ", arr1);

// 3. shift
// 배열 맨 앞에 있는 요소를 제거, 반환
const shiftedItem = arr1.shift();
console.log("shiftedItem : ", shiftedItem);

// 4. unshift
// 배열의 맨 앞에 새로운 요소를 추가하는 매서드
arr1.unshift("new1");
console.log("unshifted!! 'new1' --> ", arr1);

// shift, unshift는 비교적 push, pop보다 느림
// index를 옮겨야 하는 이유로...

// 5. slice
// 마치 가위처럼, 배열의 특정 범위를 잘라내서 새로운 배열로 반환
console.log("arr1 : ", arr1);
console.log("arr1의 index 2 ~ 4+1까지 slice : ", arr1.slice(2, 5));
console.log("slice 이후 arr1 : ", arr1);
console.log("arr1의 index 2부터 slice : ", arr1.slice(2));
console.log("arr1의 index -1까지 slice : ", arr1.slice(-1));
console.log("arr1의 index -3까지 slice : ", arr1.slice(-3));

// 6. concat
// 두 개의 서로 다른 배열을 이어 붙여서 새로운 배열을 반환
let arr2 = [1, 2];
let arr3 = [3, 4];

let concatArr = arr2.concat(arr3);
console.log(concatArr);
