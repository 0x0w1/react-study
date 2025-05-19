// 객체타입, 원시타입
let o1 = { name: "황금별" };
let o2 = o1; //얕은 복사
let o3 = { ...o1 }; // 깊은 복사

console.log(o1 === o2); // true (object의 Pointer가 같음)  얕은 비교
console.log(o1 === o3); // false (object Pointer address 가 다름)

console.log(JSON.stringify(o1) === JSON.stringify(o3)); // pointer가 아닌 값을 비교함 (깊은 비교)

// Function과 Array 모두 Object임
