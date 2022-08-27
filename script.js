import ancientsData from "../data/ancients.js";
import cardsData from "../data/mythicCards/index.js";
import difficulties from "../data/difficulties.js";
import cards_green from "../assets/MythicCards/green/index.js";
import cards_brown from "../assets/MythicCards/brown/index.js";
import cards_blue from "../assets/MythicCards/blue/index.js";

const ancients_block = document.querySelector(".horror-wrapper");
const ancients = document.querySelector(".horror-card");
/*const overlay = document.querySelector(".overlay");*/
const ancientsImages = document.querySelector(".horror-image");
const difficulties_block = document.querySelector(".levels-of-difficulty");
const button_shuffle = document.querySelector(".shuffle-deck");
const deck_block = document.querySelector(".cards-wrapper");
const stages_block = document.querySelector(".traker");
const cards_back_block = document.querySelector(".cards_back");
const cards_face_block = document.querySelector(".cards_face");

let card_selected = {};
let difficulty_selected = {};
let deck_firstStage = [];
let deck_secondStage = [];
let deck_thirdStage = [];
let colors = ["green", "brown", "blue"];
let stages = ["firstStage", "secondStage", "thirdStage"];

/*Choose Anscient chapter*/

function chooseAncient() {
  ancientsImages.classList.add("border");
}

/*function denyChooseAncient() {
  ancientsImages.classList.remove("border");
}*/

ancients.addEventListener("click", chooseAncient);
/*ancients.addEventListener("click", denyChooseAncient);*/

/*Choose Anscient chapter*/
