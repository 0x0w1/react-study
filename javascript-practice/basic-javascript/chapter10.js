// 1. 반복문
for (let i = 0; i < 10; i++) {
  console.log(`i : ${i}`);

  if (i === 5) {
    console.log(`i is 5..! Let's break.`);
    break;
  }
}

for (let j = 0; j < 10; j++) {
  if (j % 2 === 0) continue;
  console.log(`j는 홀수 : ${j}`);
}

// 응용
const arr1 = Array.from({ length: 10 }, (v, i) => i);
console.log(arr1);

console.log("arr1 출력");
arr1.forEach((ele) => {
  console.log(ele);
});

const arr2 = [...Array(10).keys()];
console.log(arr2);

console.log("arr2 출력");
arr2.forEach((ele) => {
  if (ele % 2 === 0) console.log(ele);
});
