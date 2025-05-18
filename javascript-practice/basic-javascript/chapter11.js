// 1. 함수
function greeting() {
  console.log("안녕하세요.!!");
}
greeting();

function getArea(w, h) {
  return w * h;
}
let area = getArea(10, 20);
console.log(area);

const getArea2 = (w, h) => {
  return w * h;
};
