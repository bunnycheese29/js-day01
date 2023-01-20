let num01 = 10;
let num02 = 5;
console.log(num01 + num02);
console.log(num01 - num02);
console.log(num01 * num02);
console.log(num01 / 3);
console.log(num01 % 3); //나누기 후 나머지
console.log(num01 > num02); //true
console.log(num01 < num02); //false
console.log(num01 >= num02); //true
console.log(num01 <= num02); //false
console.log(num01 === num02); //false
console.log(num01 !== num02); //true !-부정연산자

console.log(num01 > num02 || num01 < num02); //true (둘중에 하나만 맞아도 T)
console.log(num01 > num02 && num01 < num02); //false

const id = "jjang051";
const pw = "1234";
//truthy (0빼고 전부/문자도ok) falsy (0, NaN, null, undefined, "")
if (id === "jjang051" && pw === "1234") {
  console.log("로그인");
}
