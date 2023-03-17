// El styles lo importamos aquí, ya se carga después al compilar todo
import "../scss/styles.scss";

const mainContainer = document.getElementById("main-container");
const leftContainer = document.getElementById("container-left");
const centerContainer = document.getElementById("container-center");
const rightContainer = document.getElementById("container-right");
const currentNumber = document.getElementById("current-number");

const randomBingoBoxSmall = 15;
const randomBingoBoxBig = 99;
let timeoutId;
let win = false;
const randomNumberArray = [];
let numberToPlay;
let allBoxes;

const currentRandomNumber = () => {
  return Math.floor(Math.random() * randomNumberArray.length);
};
const randomNumber = () => {
  return Math.floor(Math.random() * 99);
};

const createDivsLeft = () => {
  const fragment = document.createDocumentFragment();
  for (let index = 0; index < randomBingoBoxSmall; index++) {
    const box = document.createElement("span");
    box.classList.add("box");
    box.textContent = randomNumber();
    box.dataset.number = box.textContent;
    fragment.append(box);
  }
  console.log(fragment);

  leftContainer.append(fragment);
};

const createDivsRight = () => {
  const fragment = document.createDocumentFragment();
  for (let index = 0; index < randomBingoBoxSmall; index++) {
    const box = document.createElement("span");
    box.classList.add("box");
    box.textContent = randomNumber();
    box.dataset.number = box.textContent;
    fragment.append(box);
  }
  console.log(fragment);

  rightContainer.append(fragment);
};
const createDivsCenter = () => {
  const fragment = document.createDocumentFragment();
  for (let index = 0; index < randomBingoBoxBig; index++) {
    const box = document.createElement("span");
    box.classList.add("box");
    box.textContent = index + 1;
    box.dataset.number = box.textContent;
    fragment.append(box);
  }

  centerContainer.append(fragment);
};
const fillArray = () => {
  for (let index = 1; index < 100; index++) {
    randomNumberArray.push(index);
  }
};
const setRandomNumberArray = () => {
  const index = currentRandomNumber();
  const number = randomNumberArray[index];
  randomNumberArray.splice(index, 1);
  numberToPlay = number;
  currentNumber.textContent = numberToPlay;
};
const setClassList = () => {
  allBoxes = document.querySelectorAll(".box");

  allBoxes.forEach((element) => {
    if (Number(element.dataset.number) === numberToPlay) {
      element.classList.add("box--checked");
    }
  });
};

const currentNumberText = () => {
  clearTimeout(timeoutId);

  if (randomNumberArray.length >= 0) {
    timeoutId = setTimeout(currentNumberText, 200);

    setRandomNumberArray();
    setClassList();
  } else {
    return;
  }
};

fillArray();
currentNumberText();
createDivsLeft();
createDivsRight();
createDivsCenter();
