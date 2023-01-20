function addZero(num) {
  if (num < 10) {
    return "0" + num;
  }
  return num;
}
const myNum = addZero(10);
console.log(myNum);

function plus(num01 = 0, num02 = 0) {
  //console.log(num01 + num02) / 2;
  return num01 + num02;
}

const result02 = plus(10, 20);
const result = plus(100, 50);
console.log(result);
