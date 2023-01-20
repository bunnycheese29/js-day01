//90이상 A 80이상 b 70이상 c 60이상 d f
const inputKor = document.querySelector(".kor");
const inputEng = document.querySelector(".eng");
const inputMaths = document.querySelector(".maths");
const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

btn.addEventListener("click", function () {
  const kor = parseInt(inputKor.value);
  const eng = parseInt(inputEng.value);
  const maths = parseInt(inputMaths.value);
  if (isNaN(kor)) {
    alert("국어 점수를 입력하세요.");
    return;
  }
  if (isNaN(eng)) {
    alert("영어 점수를 입력하세요.");
    return;
  }
  if (isNaN(maths)) {
    alert("수학 점수를 입력하세요.");
    return;
  }
  const sum = kor + eng + maths;
  let avg = sum / 3;
  avg = Math.round(avg * 10) / 10;

  console.log(avg);
  if (avg >= 90) {
    score = "A";
  } else if (avg >= 80) {
    score = "B";
  } else if (avg >= 70) {
    score = "C";
  } else if (avg >= 60) {
    score = "D";
  } else {
    score = "F";
  }
  result.textContent = `총점: ${sum} 평균: ${avg} 학점: ${score}`;
});
