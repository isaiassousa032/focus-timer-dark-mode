const buttonPlay = document.querySelector(".play");
const buttonStop = document.querySelector(".stop");
const buttonPlus = document.querySelector(".plus");
const buttonMinus = document.querySelector(".minus");
const minutesDisplay = document.querySelector(".minutes");
const secondsDisplay = document.querySelector(".seconds");

const treeCard = document.querySelector(".tree-card");
const cloudCard = document.querySelector(".cloud-card");
const coffeeCard = document.querySelector(".coffee-card");
const fireCard = document.querySelector(".fire-card");

const tree = document.querySelector(".tree");
const cloud = document.querySelector(".cloud");
const coffee = document.querySelector(".coffee");
const fire = document.querySelector(".fire");

const treeVolume = treeCard.querySelector('input')
const cloudVolume = cloudCard.querySelector('input')
const fireVolume = fireCard.querySelector('input')
const coffeeVolume = coffeeCard.querySelector('input')

const lightMode = document.querySelector(".light-mode")
const darkMode = document.querySelector(".dark-mode")
const buttonTheme = document.querySelector(".theme-button")

const body = document.querySelector("body")

export {
  buttonPlay,
  buttonStop,
  buttonPlus,
  buttonMinus,
  minutesDisplay,
  secondsDisplay,
  tree,
  cloud,
  coffee,
  fire,
  lightMode,
  darkMode,
  buttonTheme,
  body,
  treeVolume,
  fireVolume,
  cloudVolume,
  coffeeVolume
};

