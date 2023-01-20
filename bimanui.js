const inputHeight = document.querySelector(".height");
const inputWeight = document.querySelector(".weight");
const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

btn.addEventListener("click", function () {
  const height = parseInt(inputHeight.value);
  const weight = parseInt(inputWeight.value);
  const centiHeight = height / 100;
  let biman = weight / Math.pow(centiHeight, 2);
  biman = Math.round(biman * 10) / 10;
  if (height === "") {
    alert("키를 입력하세요.");
  }
  if (weight === "") {
    alert("몸무게를 입력하세요.");
  }
  if (height === "" && weight === "") {
    alert("키와 몸무게를 입력하세요.");
  }

  console.log(biman);
  if (biman <= 18.5) {
    result.textContent = "저체중";
  } else if (biman > 22.9) {
    result.textContent = "비만";
  } else {
    result.textContent = "정상";
  }
});
