// async
// 어떤 함수를 비동기 함수로 만들어주는 키워드
// async function getData() {
//     return {
//         name: "황금별",
//         id: "owl",
//     };
// }

// console.log(getData()); // Promise 객체로 반환되는 것을 볼 수 있음

async function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                name: "황금별",
                id: "owl",
            });
        }, 2000);
    });
}
// await
// Without await
// function printData() {
//     getData().then((result) => {
//         console.log(result);
//     });
// }

// printData();

// With await
async function printData() {
    const data = await getData();
    console.log(data);
}

printData();
