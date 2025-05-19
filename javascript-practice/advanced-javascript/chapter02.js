// 단락 평가 - Short-circuit Evaluation
function returnTrue() {
    console.log("True 함수");
    return true;
}

function returnFalse() {
    console.log("False 함수");
    return false;
}

console.log("returnTrue() && returnFalse()");
console.log(returnTrue() && returnFalse());
console.log("returnTrue() || returnFalse()");
console.log(returnTrue() || returnFalse());

console.log("\n-----\n");

console.log("returnFalse() && returnTrue()");
console.log(returnFalse() && returnTrue());
console.log("returnFalse() || returnTrue()");
console.log(returnFalse() || returnTrue());

// Test 2

function returnNumber() {
    console.log("return 10;");
    return 10;
}

function returnUndefined() {
    console.log("return undefined;");
    return undefined;
}

console.log("\n-----\n");

console.log("returnNumber() && returnUndefined()");
console.log(returnNumber() && returnUndefined());
console.log("returnNumber() || returnUndefined()");
console.log(returnNumber() || returnUndefined());

// Test3
function printName(person) {
    // if (!person) {
    //     console.log("person에 값이 없음");
    //     return;
    // }
    // console.log(person.name);
    const name = person && person.name;
    console.log(`입력받은 person : ${JSON.stringify(person, null, 2)}`);
    console.log(name || "person의 값이 없음");
}
printName();
printName({});
printName({ something: "NAME" });
printName({ name: null });
printName({ name: "NAAAAAMMMMM" });
