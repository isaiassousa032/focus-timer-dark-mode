import {
  body,
  buttonMinus,
  buttonPlay,
  buttonPlus,
  buttonStop,
  buttonTheme,
  cloud,
  cloudVolume,
  coffee,
  coffeeVolume,
  darkMode,
  fire,
  fireVolume,
  lightMode,
  tree,
  treeVolume
} from "./elements.js";

export default function Events({ controls, timer, sound }) {
  function changeSelectedCardStyle(selectedCard) {
    const cards = [tree, cloud, coffee, fire];
    cards.forEach((element) => {
      if (element === selectedCard) {
        element.classList.toggle("selected");
      } else {
        element.classList.remove("selected");
      }
    });
  }
  
  treeVolume.addEventListener("input", function(e) {
    sound.changeVolume("forestSound", e.target.value)
  })

  cloudVolume.addEventListener("input", function(e) {
    sound.changeVolume("rainSound", e.target.value)
  })

  coffeeVolume.addEventListener("input", function(e) {
    sound.changeVolume("cafeteriaSound", e.target.value)
  })

  fireVolume.addEventListener("input", function(e) {
    sound.changeVolume("fireSound", e.target.value)
  })

  tree.addEventListener("click", function () {
    changeSelectedCardStyle(tree);
    sound.selectMusic("forestSound");
  });

  cloud.addEventListener("click", function () {
    changeSelectedCardStyle(cloud);
    sound.selectMusic("rainSound");
  });

  coffee.addEventListener("click", function () {
    changeSelectedCardStyle(coffee);
    sound.selectMusic("cafeteriaSound");
  });

  fire.addEventListener("click", function () {
    changeSelectedCardStyle(fire);
    sound.selectMusic("fireSound");
  });

  buttonPlay.addEventListener("click", function () {
    controls.play();
    timer.countdown();
    sound.pressButton();
  });

  buttonStop.addEventListener("click", function () {
    timer.reset();
    controls.reset();
    sound.pressButton();
  });

  buttonPlus.addEventListener("click", function () {
    sound.pressButton();
    controls.addFiveMinutes();
  });

  buttonMinus.addEventListener("click", function () {
    sound.pressButton();
    controls.removeFiveMinutes();
  });

  function changeTheme() {
    const isLightMode = window.localStorage.getItem("isLightMode");
    if (!isLightMode) {
      window.localStorage.setItem("isLightMode", "true");

      isLightMode = window.localStorage.getItem("isLightMode");
    }

    if (isLightMode == "true") {
      body.classList.remove("theme-dark");
      body.classList.add("theme-light");

      lightMode.classList.remove("hide");
      darkMode.classList.add("hide");
    } else {
      body.classList.remove("theme-light");
      body.classList.add("theme-dark");

      lightMode.classList.add("hide");
      darkMode.classList.remove("hide");
    }
  }

  buttonTheme.addEventListener("click", function () {
    let isLightMode = window.localStorage.getItem("isLightMode");

    window.localStorage.setItem(
      "isLightMode",
      isLightMode == "true" ? "false" : "true"
    );

    changeTheme();
  });

  changeTheme();
}
