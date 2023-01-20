console.log(Math.pow(3, 3));
console.log(2 ** 10);

const height = 180;
const weight = 90;
const centiHeight = height / 100; //미터단위로 나옴
let biman = weight / Math.pow(centiHeight, 2);
biman = Math.round(biman * 10) / 10; //소수점 한자리 (* 20) / 20) 두자리
console.log(biman);
if (biman <= 18.5) {
  console.log("저체중");
} else if (biman > 18.5 && biman <= 22.9) {
  console.log("정상");
} else {
  console.log("비만");
}
/* if (biman <= 18.5) {
  console.log("저체중");
} else if (biman > 22.9) {
  console.log("비만");
} else {
  console.log("정상");
} */
