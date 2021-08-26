const slideBox = document.querySelector(".stadium-screen__slidebox");
const stadiumImg = [
  "stadium1.jpg",
  "stadium2.jpg",
  "stadium3.jpg",
  "stadium4.jpg",
  "stadium5.jpg",
];
const slide = document.createElement("div");
slide.className = "stadium-screen__slidebox__slide";

for (let stadium of stadiumImg) {
  let imgbox = document.createElement("div");
  imgbox.className = "stadium-screen__slidebox__slide__imgbox";

  let img = document.createElement("img");
  img.className = "stadium-screen__slidebox__slide__imgbox__img";
  img.src = `img/${stadium}`;

  imgbox.appendChild(img);
  slide.appendChild(imgbox);
}
slideBox.appendChild(slide);

const leftButtonBox = document.querySelector(
  ".stadium-screen__slidebox__goleft"
);
const rightButtonBox = document.querySelector(
  ".stadium-screen__slidebox__goright"
);

const X_LENGTH = slideBox.offsetWidth;
let x = 0;
leftButtonBox.style.display = "none";
console.dir(leftButtonBox);
function checkStartOrEnd() {
  if (x === 0) {
    return "start";
  } else if (x == -(X_LENGTH * 4)) {
    return "end";
  }
}
function moveLeft(event) {
  let change = x + X_LENGTH;
  slide.style.transform = "translate(" + String(change) + "px, 0px)";
  x = change;
  if (checkStartOrEnd() === "start") {
    leftButtonBox.style.display = "none";
  } else {
    rightButtonBox.style.display = "flex";
  }
}
function moveRight(event) {
  let change = x - X_LENGTH;
  slide.style.transform = "translate(" + String(change) + "px, 0px)";
  x = change;
  if (checkStartOrEnd() === "end") {
    rightButtonBox.style.display = "none";
  } else {
    leftButtonBox.style.display = "flex";
  }
}
leftButtonBox.addEventListener("click", moveLeft);
rightButtonBox.addEventListener("click", moveRight);
// celebrity slide box
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
const celebSlideBox = document.querySelector(".celebrity-screen__slidebox");
const celebImg = [
  "player_zidane.jpg",
  "player_raul.jpg",
  "player_casillas.jpg",
  "player_ramos.jpg",
  "player_ronaldo.jpg",
];
const celeb = [
  "지네딘 지단",
  "라울 곤잘레스",
  "이케르 카시야스",
  "세르히오 라모스",
  "크리스티아누 호날두",
];
const celebClassName = [
  ".celebrity-screen__introduce__zidane",
  ".celebrity-screen__introduce__raul",
  ".celebrity-screen__introduce__casillas",
  ".celebrity-screen__introduce__ramos",
  ".celebrity-screen__introduce__ronaldo",
];

const celebSlide = document.createElement("div");
celebSlide.className = "celebrity-screen__slidebox__slide";

for (let celeb of celebImg) {
  let imgbox = document.createElement("div");
  imgbox.className = "celebrity-screen__slidebox__slide__imgbox";

  let img = document.createElement("img");
  img.className = "celebrity-screen__slidebox__slide__imgbox__img";
  img.src = `img/${celeb}`;

  imgbox.appendChild(img);
  celebSlide.appendChild(imgbox);
}
celebSlideBox.appendChild(celebSlide);

const celebLeftButtonBox = document.querySelector(
  ".celebrity-screen__slidebox__goleft"
);
const celebRightButtonBox = document.querySelector(
  ".celebrity-screen__slidebox__goright"
);

const CELEB_X_LENGTH = celebSlideBox.offsetWidth;
let celeb_x = 0;
let index = 0;

const celebrityTitle = document.querySelector(".celebrity-screen__title span");
function changeText() {
  for (let i = 0; i < 5; i++) {
    const className = document.querySelector(celebClassName[i]);
    if (i === index) {
      celebrityTitle.innerText = `CELEBRITY : ${celeb[i]}`;
      className.style.display = "flex";
    } else {
      className.style.display = "none";
    }
  }
}
const zidane = document.querySelector(".celebrity-screen__introduce__zidane");
zidane.style.display = "flex";

celebLeftButtonBox.style.display = "none";
function celebCheckStartOrEnd() {
  if (celeb_x === 0) {
    return "start";
  } else if (celeb_x == -(CELEB_X_LENGTH * 4)) {
    return "end";
  }
}
function celebMoveLeft(event) {
  let change = celeb_x + CELEB_X_LENGTH;
  celebSlide.style.transform = "translate(" + String(change) + "px, 0px)";
  celeb_x = change;
  if (celebCheckStartOrEnd() === "start") {
    celebLeftButtonBox.style.display = "none";
  } else {
    celebRightButtonBox.style.display = "flex";
  }
  index -= 1;
  changeText();
}
function celebMoveRight(event) {
  let change = celeb_x - CELEB_X_LENGTH;
  celebSlide.style.transform = "translate(" + String(change) + "px, 0px)";
  celeb_x = change;
  if (celebCheckStartOrEnd() === "end") {
    celebRightButtonBox.style.display = "none";
  } else {
    celebLeftButtonBox.style.display = "flex";
  }
  index += 1;
  changeText();
}
celebLeftButtonBox.addEventListener("click", celebMoveLeft);
celebRightButtonBox.addEventListener("click", celebMoveRight);
