const forwardsBox = document.querySelector(
  ".players-screen__content__column__board__forwards"
);
const midBox = document.querySelector(
  ".players-screen__content__column__board__mid"
);
const backwardsBox = document.querySelector(
  ".players-screen__content__column__board__backwards"
);
const goalieBox = document.querySelector(
  ".players-screen__content__column__board__goalie"
);
function boxAnimation(box) {
  const position = box.path[box.path.length - 10].className;
  const boxDir = document.querySelector(`.${position}`);
  boxDir.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
  boxDir.style.color = "white";
}
forwardsBox.addEventListener("click", boxAnimation);
midBox.addEventListener("click", boxAnimation);
backwardsBox.addEventListener("click", boxAnimation);
goalieBox.addEventListener("click", boxAnimation);
