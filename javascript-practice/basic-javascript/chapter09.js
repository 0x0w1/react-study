// 1. if 조건문
let num = 10;

if (num > 10) {
  console.log("num은 10보다 큽니다.");
} else {
  console.log("num은 10보다 작거나 같습니다.");
}

if (num > 10) {
  console.log("num은 10보다 큽니다.");
} else if (num === 10) {
  console.log("num은 10입니다.");
} else {
  console.log("num은 10보다 작습니다.");
}

// 2. Switch 문
let animal = "cat";
switch (animal) {
  case "cat": {
    console.log("animal은 cat입니다.");
    break;
  }
  case "dog": {
    console.log("animal은 dog입니다.");
    break;
  }
  case "bear": {
    console.log("animal은 bear입니다.");
    break;
  }
  default:
    console.log(`animal의 값은 ${animal}`);
    break;
}
