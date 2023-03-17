// El styles lo importamos aquí, ya se carga después al compilar todo
import "../scss/styles.scss";
import { createBingo, createCards,fillRandomNumber } from "./createCards";
import { start } from "./numberToPlay";

const leftContainer = document.getElementById("container-left");
const centerContainer = document.getElementById("container-center");
const rightContainer = document.getElementById("container-right");
const startButton = document.getElementById("start");

const leftPlayer = [];
const rightPlayer = [];




fillRandomNumber(leftPlayer,15)
fillRandomNumber(rightPlayer,15)
createCards(leftContainer,leftPlayer)
createCards(rightContainer,rightPlayer)
createBingo(centerContainer)

startButton.addEventListener("click", () => {
start()

});
