// 비동기 관련 테스트
// Javascript 엔진이 실행
console.log(1);

// Web APIs 실행 영역에 실행을 맞기고, callback 함수를 함께 전달
// callback 함수는 ()를 넘겨주는 거임
setTimeout(() => {
    console.log(2);
}, 3000);

// Javascript 엔진이 아래의 코드를 실행
console.log(3);
console.log(4);
