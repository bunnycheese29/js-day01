//배열 array

const animals = ["lion", "tiger", "rabbit"];
const myAnimals = animals; //하나에 추가해도 똑같이 추가됨 / 배열 복사는 다른 방식

animals.push("dog"); //뒤에 추가
// animals.unshift("cat"); //앞에 추가
const popped = animals.pop(); //push

console.log("🚀 ~ file: array.js:4 ~ animals", animals[3]);
console.log(typeof animals); //object (객체)
console.log(myAnimals === animals);
console.log(animals);

let i = 0; //let은 중복 설정 불가능
i = i + 1;
i++;
for (let i = 0; i < 10; i += 2) {
  console.log(i);
}

const total = animals.length;
for (let i = 0; i < total; i++) {
  console.log(animals[i]);
}
