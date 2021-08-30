const imgForwards = [
  [
    "bale.jpg",
    "BALE",
    "https://www.realmadrid.com/en/football/squad/gareth-bale",
  ],
  [
    "benzema.jpg",
    "BENZEMA",
    "https://www.realmadrid.com/en/football/squad/karim-benzema",
  ],
  [
    "hazard.jpg",
    "HAZARD",
    "https://www.realmadrid.com/en/football/squad/eden-hazard",
  ],
  [
    "jovic.jpg",
    "JOVIC",
    "https://www.realmadrid.com/en/football/squad/luka-jovi%C4%87",
  ],
  [
    "mariano.jpg",
    "MARIANO",
    "https://www.realmadrid.com/en/football/squad/mariano-diaz-mejia",
  ],
  [
    "rodrygo.jpg",
    "RODRYGO",
    "https://www.realmadrid.com/en/football/squad/rodrygo-goes",
  ],
  [
    "vini.jpg",
    "VINI JR.",
    "https://www.realmadrid.com/en/football/squad/vinicius-paixao-de-oliveira-junior-",
  ],
];
const imgMid = [
  [
    "asensio.jpg",
    "ASNESIO",
    "https://www.realmadrid.com/en/football/squad/marco-asensio-willemsen",
  ],
  [
    "casemiro.jpg",
    "CASEMIRO",
    "https://www.realmadrid.com/en/football/squad/carlos-henrique-casemiro",
  ],
  [
    "ceballos.jpg",
    "CEBALLOS",
    "https://www.realmadrid.com/en/football/squad/daniel-ceballos-fernandez",
  ],
  [
    "isco.jpg",
    "ISCO",
    "https://www.realmadrid.com/en/football/squad/francisco-roman--alarcon",
  ],
  [
    "modric.jpg",
    "MODRIC",
    "https://www.realmadrid.com/en/football/squad/luka-modric",
  ],
  [
    "valverde.jpg",
    "VALVERDE",
    "https://www.realmadrid.com/en/football/squad/federico-santiago-valverde-dipetta",
  ],
  [
    "kroos.jpg",
    "KROOS",
    "https://www.realmadrid.com/en/football/squad/toni-kroos",
  ],
];
const imgBackwards = [
  [
    "alaba.jpg",
    "ALABA",
    "https://www.realmadrid.com/en/football/squad/david-alaba",
  ],
  [
    "carvajal.jpg",
    "CARVAJAL",
    "https://www.realmadrid.com/en/football/squad/daniel-carvajal-ramos",
  ],
  [
    "lucas.jpg",
    "LUCAS V.",
    "https://www.realmadrid.com/en/football/squad/lucas-vazquez-iglesias-",
  ],
  [
    "marcelo.jpg",
    "MARCELO",
    "https://www.realmadrid.com/en/football/squad/marcelo-vieira-da-silva",
  ],
  [
    "mendy.jpg",
    "F.MENDY",
    "https://www.realmadrid.com/en/football/squad/ferland-mendy",
  ],
  [
    "militao.jpg",
    "E.MILITAO",
    "https://www.realmadrid.com/en/football/squad/eder-gabriel-militao",
  ],
  [
    "nacho.jpg",
    "NACHO",
    "https://www.realmadrid.com/en/football/squad/jose-i-fernandez-iglesias",
  ],
  [
    "vallejo.jpg",
    "VALLEJO",
    "https://www.realmadrid.com/en/football/squad/jesus-vallejo-lazaro",
  ],
];
const imgGoalie = [
  [
    "courtois.jpg",
    "COURTOIS",
    "https://www.realmadrid.com/en/football/squad/thibaut-courtois",
  ],
  [
    "lunin.jpg",
    "LUNIN",
    "https://www.realmadrid.com/en/football/squad/andriy-lunin",
  ],
];

function pushImage(imgList) {
  const columnPictures = document.querySelector(
    ".players-screen__content__column__pictures__picturebox"
  );
  const pastColumn = document.querySelectorAll(
    ".players-screen__content__column__pictures__picturebox__column"
  );
  for (let i = 0; i < pastColumn.length; i++) {
    columnPictures.removeChild(pastColumn[i]);
  }

  for (let i = 0; i < 3; i++) {
    const column = document.createElement("div");
    column.className =
      "players-screen__content__column__pictures__picturebox__column";
    for (let j = 0; j < 3; j++) {
      const row = document.createElement("div");
      row.className =
        "players-screen__content__column__pictures__picturebox__row";
      if (i * 3 + j < imgList.length) {
        const div = document.createElement("div");
        div.className =
          "players-screen__content__column__pictures__picturebox__img";
        div.style.background = `round url("img/players/${
          imgList[i * 3 + j][0]
        }")`;

        const nameBox = document.createElement("a");
        nameBox.className =
          "players-screen__content__column__pictures__picturebox__img__namebox";
        nameBox.href = imgList[i * 3 + j][2];
        nameBox.target = "blank";

        const name = document.createElement("span");
        name.innerText = imgList[i * 3 + j][1];

        nameBox.appendChild(name);
        div.appendChild(nameBox);
        row.appendChild(div);
        console.dir(div);
      }
      column.appendChild(row);
    }
    columnPictures.appendChild(column);
  }
}

function selectPosition(event) {
  const initialLetter = document.querySelector(
    ".players-screen__content__column__pictures__initletter"
  );
  initialLetter.style.display = "none";
  const dirName = event.path[event.path.length - 10].className;
  console.log(dirName);
  if (dirName === "players-screen__content__column__board__forwards") {
    pushImage(imgForwards);
  } else if (dirName === "players-screen__content__column__board__mid") {
    pushImage(imgMid);
  } else if (dirName === "players-screen__content__column__board__backwards") {
    pushImage(imgBackwards);
  } else if (dirName === "players-screen__content__column__board__goalie") {
    pushImage(imgGoalie);
  }
}
const pitch = document.querySelector(".players-screen__content__column__board");
pitch.addEventListener("click", selectPosition);
