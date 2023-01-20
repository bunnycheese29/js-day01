//유사배열 push pop이런 거 안됨
const comItems = document.querySelectorAll("#com ul li");
const playerItems = document.querySelectorAll("#player ul li");

for (let i = 0; i < 3; i++) {
  comItems[i].style.display = "none";
}

//함수의 정의
randomPlay("남진", "아침");
randomPlay("지은", "점심");

//함수의 선언 hoisting (기명함수)
function randomPlay(name, word) {
  console.log("random play");
  console.log(`${name}아 안녕`);
  console.log(`${word}은 먹었니?`);
}

//함수의 표현 (익명함수)
const randomPlay02 = function (name, word) {
  // const randomPlay02 = (name, word) => {
  console.log("random play");
  console.log(`${name}아 안녕`);
  console.log(`${word}은 먹었니?`);
};

randomPlay02("명현", "저녁");

comItems[0].style.display = "none";
comItems[1].style.display = "none";
comItems[2].style.display = "none";
comItems[0].style.display = "block";
//comItems[0].style.margin = "20px"; marginLeft marginBottom

let num = 0;
playerItems[0].addEventListener("click", function () {
  if (num === 0) {
    console.log("비김");
  } else if (num === 1) {
    console.log("짐");
  } else {
    console.log("이김");
  }
  console.log(num);
  clearInterval(idx);
});

playerItems[1].addEventListener("click", function () {
  if (num === 0) {
    console.log("이김");
  } else if (num === 1) {
    console.log("비김");
  } else {
    console.log("짐");
  }
  clearInterval(idx);
});
playerItems[2].addEventListener("click", function () {
  if (num === 0) {
    console.log("짐");
  } else if (num === 1) {
    console.log("이김");
  } else {
    console.log("비김");
  }

  clearInterval(idx);
});

const idx = setInterval(function () {
  comItems[0].style.display = "none";
  comItems[1].style.display = "none";
  comItems[2].style.display = "none";
  num++;
  num = num % 3;
  comItems[num].style.display = "block";
}, 20);
