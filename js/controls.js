import { minutesDisplay, secondsDisplay } from "./elements.js";
import Timer from "./timer.js";

export default function Controls({ buttonPlay }) {
  function play() {
    buttonPlay.classList.add("hide");
  }

  function reset() {
    buttonPlay.classList.remove("hide");
  }

  function addFiveMinutes() {
    let minutes = Number(minutesDisplay.textContent);
    let seconds = Number(secondsDisplay.textContent);

    if (minutes >= 59) {
      alert("Limite máximo de minutos atingido!");
    } else {
      Timer().updateDisplay(String(minutes + 5), seconds);
    }
  }

  function removeFiveMinutes() {
    let minutes = Number(minutesDisplay.textContent);
    let seconds = Number(secondsDisplay.textContent);

    if (minutes <= 5) {
      alert("Limite mínimo de minutos atingido!");
    } else {
      Timer().updateDisplay(String(minutes - 5), seconds);
    }
  }

  return {
    play,
    reset,
    addFiveMinutes,
    removeFiveMinutes,
  };
}
