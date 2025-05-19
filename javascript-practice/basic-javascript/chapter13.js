// 1. 콜백 함수 : 다른 함수의 인수로써 전달된 함수
function parentFunction(funcVariable) {
    console.log("parentFunction : I am parent function.");
    console.log("parentFunction : I will execute sub function..!");
    funcVariable();
}

function subFunction() {
    console.log("subFunction : I am sub function.");
}

parentFunction(subFunction);
parentFunction(() => {
    console.log("I am sub function arrow function..!");
});

// 2. 콜백 함수 활용
// function repeat(count) {
//     console.log("Run repeat.")
//     for (let i = 1; i <= count; i++) {
//         console.log(`i : ${i}`)
//     }
// }

// function repeatDouble(count) {
//     console.log("Run repeatDouble.")
//     for (let i = 1; i <= count; i++) {
//         console.log(`i * 2 : ${i * 2}`)
//     }
// }

// repeat(5);
// repeatDouble(5);

function repeat(count, callback) {
    for (let i = 1; i <= 10; i++) {
        callback(i);
    }
}

console.log("Run repeat");
repeat(5, function (i) {
    console.log(`i : ${i}`);
}); // repeat

console.log("Run repeat");
repeat(5, (i) => console.log(`i : ${i}`)); // repeat

console.log("Run repeatDouble");
repeat(5, (i) => console.log(`i * 2 : ${i * 2}`)); // repeatDouble

console.log("Run repeatTripple");
repeat(5, (i) => console.log(`i * 3 : ${i * 3}`)); // repeatTripple
