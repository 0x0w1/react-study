// 1. Date 객체를 생성하는 방법
let date1 = new Date();
console.log(date1); //현재 시간

let date2 = new Date("2025-01-01 23:59:10");
console.log(date2);

let date3 = new Date("2023/12/31/10:00:00");
console.log(date3);

let date4 = new Date(1997, 10, 10, 15, 35, 55);
console.log(date4);

// 2. Timestamp
let ts1 = date1.getTime();
console.log(ts1);

let date5 = new Date(ts1);
console.log(date5);

// 3. 시간 요소를 추출하는 방법
let year = date1.getFullYear();
let month = date1.getMonth();
let day = date1.getDate();
let hour = date1.getHours();
let minute = date1.getMinutes();
let second = date1.getSeconds();
let dayOfWeek = date1.getDay();

console.log(year, month, day, hour, minute, second, dayOfWeek);

// month 0~11
let date6 = new Date();
console.log(date6.getMonth());

// 1월
date6.setMonth(0);
console.log(date6);

// 12월
date6.setMonth(11);
console.log(date6);

// 5, 시간 출력
console.log(date1.toDateString());
console.log(date1.toLocaleDateString("ko-KR"));
console.log(date1.toLocaleDateString());
