function task() {
    setTimeout(() => {
        console.log("Hello I am task1");
    }, 3000);
}

function add(a, b, callback) {
    setTimeout(() => {
        const result = a + b;
        callback(result);
    }, 3000);
}

task();
// add(1, 2);
add(1, 2, (value) => {
    console.log(`Callback result : ${value}`);
});

// 음식 주문 상황 가정
function orderFood(callback) {
    setTimeout(() => {
        const food = "떡볶이";
        callback(food);
    }, 3000);
}

function cooldownFood(food, callback) {
    setTimeout(() => {
        const cooldownedFood = `식은 ${food}`;
        callback(cooldownFood);
    }, 2000);
}

orderFood((food) => {
    console.log(food);
    cooldownFood(food, (cooldownedFood) => {
        console.log(cooldownedFood);
    });
});
