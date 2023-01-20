// [크리스마스 카운트 다운] 월은 0부터 시작하니까 12월은 11
const gifts = ["루이비똥", "구찌", "샤넬", "디올", "프라다", "발렌시아가"];
console.log(parseInt(Math.random() * 4)); //0~1까지의 실수
function addZero(num) {
  if (num < 10) {
    return "0" + num;
  }
  return "" + num;
}
const time = document.querySelector(".time");
const gift = document.querySelector(".gift");
function remainTime(year, month, date) {
  const end = new Date(year, month - 1, date - 1, 23, 59, 59);
  const now = new Date();
  const remainTime = end.getTime() - now.getTime();
  const sec = addZero(parseInt(remainTime / 1000) % 60); //milliseconds -> seconds
  const min = addZero(parseInt(remainTime / 1000 / 60) % 60);
  const hour = addZero(parseInt(remainTime / 1000 / 60 / 60) % 24);
  const day = addZero(parseInt(remainTime / 1000 / 60 / 60 / 24));
  time.textContent = `${day} day : ${hour} : ${min} : ${sec}`;
  gift.textContent = gifts[parseInt(Math.random() * gifts.length)];
}

setInterval(remainTime, 1000, 2023, 2, 9);
