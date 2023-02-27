import { minutesDisplay, secondsDisplay } from "./elements.js";
import Sounds from "./sounds.js";

export default function Timer() {
  let timerTimeOut;
  let minutes = Number(minutesDisplay.textContent);

  function updateDisplay(newMinutes, seconds) {
    newMinutes = newMinutes === undefined ? minutes : newMinutes
    seconds = seconds === undefined ? 0 : seconds
    minutesDisplay.textContent = String(newMinutes).padStart(2, "0");
    secondsDisplay.textContent = String(seconds).padStart(2, "0");
  }

  function reset() {
    updateDisplay(minutes, 0)
    clearTimeout(timerTimeOut)
  }

  function countdown() {
    timerTimeOut = setTimeout(function () {
      let minutes = Number(minutesDisplay.textContent);
      let seconds = Number(secondsDisplay.textContent);
      const isFinished = minutes <= 0 && seconds <= 0

      updateDisplay(minutes, 0);

      if(isFinished) {
        updateDisplay()
        Sounds().timeEnd()
        return
      }

      if (seconds <= 0) {
        seconds = 60;
        --minutes;
      }

      updateDisplay(minutes, String(seconds - 1));

      countdown();
    }, 1000);
  }

  return {
    countdown,
    reset,
    updateDisplay
  }
}