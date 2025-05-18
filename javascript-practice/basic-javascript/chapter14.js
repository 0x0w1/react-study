// 스코프  -> 지역, 전역 변수
// 중괄호(block) 내에서 선언된 것은 그 안에서 지역 스코프를 갖음
// 함수 선언식의 경우 if, for와 같은 문법 내의 선언된 경우 function은 지역 스코프를 가지지 않음

function funcA() {
  let a = 1;
}

// console.log(a);  // ReferenceError : a is not defined.

if (true) {
  let c = 1; // if 문 밖에서는 호출 불가능
}

// console.log(c);  // ReferenceError : a is not defined.

if (true) {
  function funcB() {
    console.log("funcB 출력..!!");
  }
}
funcB();
