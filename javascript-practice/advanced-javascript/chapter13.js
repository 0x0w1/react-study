// const promise = new Promise((resolve, reject) => {
//     // 비동기 작업을 실행하는 함수
//     // executer
//     setTimeout(() => {
//         console.log("Hello!!");
//         resolve("success"); // Result에 값을 "success"로 넣어주는 작업
//     }, 2000);
// });

// promise 객체를 보면 pending 상태로 보이고, Result는 undefined;
// 실행 된 이후 2초 뒤 fullfilled로 바뀌는 걸 알 수 있음.
// console.log(promise);

// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("Hello!!");
//         reject("owl Error!!!!!!"); // Uncaugth (in promise) owl Error!!!!! 라고 출력됨
//         // Result는 undefined로 남아있음.
//     }, 2000);
// });

// console.log(promise2);

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        const num = "10"; // 10 or "10"
        if (typeof num === "number") {
            resolve(num);
        } else {
            reject("promise3 - num이 숫자가 아닙니다.");
        }
    }, 2000);
});

// console.log(promise3);
// promise3.then((value) => {
//     // 성공했을 때만 실행되는 작업
//     console.log(value);
// });

// promise3.catch((error) => {
//     // 실패했을 때 실행되는 작업
//     console.log(error);
// });

promise3
    .then((value) => {
        // 성공했을 때
        console.log(value);
    })
    .catch((error) => {
        // 실패했을 때
        console.log(error);
    });

function add10(num) {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof num === "number") {
                resolve(num + 10);
            } else {
                reject("num이 숫자가 아닙니다.");
            }
        }, 2000);
    });
    return promise;
}
const p = add10(10);

// 좋지 않은 예제
// p.then((result) => {
//     console.log(result);

//     const newP = add10(result);
//     newP.then((result2) => {
//         console.log(result2);
//     });
//     return newP;
// });

p.then((result) => {
    console.log(result);
    return add10("result");
})
    .then((result) => {
        console.log(result);
        return add10(result);
    })
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        // 중간에서 에러가 발생해도 catch 됨
        console.log(error);
    });
