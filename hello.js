//compile - 오류 발견 및 읽어내기, js는 interpreting - 동시통역 (기계어로 바꾸어 주는 장치)
// . 은 ~의, of, 's
//console.log("hello js");

//data type
let name = `장성호`; //"", ''. ``
let age = 20;
name = `장동건`;

const pi = 3.14;
console.log(name);
let address; //공간만 차지, 변수 선언시 값을 할당하지 않으면 자동으로 undefined
console.log(address);
let weight = null;
let isOld = true; //boolean

//자바스크립트의 기본 타입 String, Number, boolean, undefined, null

console.log(typeof pi); //number
console.log(typeof weight); //object (null)
console.log(typeof address); //undefined
console.log(typeof name); // string (장동건)
console.log(typeof isOld); // boolean (true/false)
name = 90; // typescript
let nan = 10 * "장성호"; //NaN (Not a Number)
console.log(nan);
// console.log(isNan(nan)); 숫자인지 궁금하다 > true
// console.log(isNan(60)); 숫자니까 > false
console.log(10 == "10"); //true
console.log(10 === "10"); //false 타입까지 체크
