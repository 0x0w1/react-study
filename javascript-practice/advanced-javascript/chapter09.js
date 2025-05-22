// 5가지 배열 변형 메소드
// 1. filter
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환

let arr1 = [
    { name: "황금별", hobby: "테니스" },
    { name: "대황금별", hobby: "테니스" },
    { name: "홍길동", hobby: "독서" },
];
// const tenisPeople = arr1.filter((item) => {
//     if (item.hobby === "테니스") return true;
// });
const tenisPeople = arr1.filter((item) => {
    item.hobby === "테니스";
});

console.log(tenisPeople);

// 2. map
// 배열의 모든 요소를 순회하면서 각각 콜백 함수를 수행하고, 그 결과값을 모아 새로운 배열로 반환하는 것
let arr2 = [1, 2, 3];
const mapResult1 = arr2.map((item, idx, arr) => {
    console.log(idx, item);
    return item * 2;
});

console.log(mapResult1);

const objectNames = arr1.map((item, index, arr) => item.name);
console.log(objectNames);

// 3. sort
// 배열을 사진 순으로 정렬하는 메서드
let arr3 = ["e", "z", "a", "b", "c"];
console.log(arr3.sort()); //정렬한 뒤의 값을 반환
console.log(arr3); // 이미 위에서 정렬돼 있음

let arr4 = [10, 3, 2, 5, 9];
console.log(arr4.sort()); // 사전순이다보니 큰 값, 작은 값 기준을 설정해줘야 함.
arr4.sort((a, b) => {
    if (a > b) {
        // b가 a 앞으로 오는 것
        return 1;
    } else if (a < b) {
        // a가 b 앞으로 오는 것
        return -1;
    } else {
        // 두 값의 자리를 바꾸지 않도록 함
        return 0;
    }
});
console.log(arr4);

arr4.sort((a, b) => {
    if (a < b) {
        return 1;
    } else if (a > b) {
        return -1;
    } else {
        return 0;
    }
});
console.log(arr4);

// 4. toSorted
arr3 = ["e", "z", "a", "b", "c"];
arr3.toSorted();
console.log(arr3);
console.log(arr3.toSorted());

// 5. join
// 배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 메서드
let arr5 = ["hi", "i am", "owl"];
const joinedArr5 = arr5.join(" ");
console.log(joinedArr5);
