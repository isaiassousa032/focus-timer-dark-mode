import Controls from "./controls.js";
import {
  buttonMinus, buttonPlay, buttonPlus, buttonStop
} from './elements.js';
import Events from "./events.js";
import Sound from "./sounds.js";
import Timer from "./timer.js";

const sound = Sound();

const controls = Controls({
  buttonPlay,
  buttonStop,
  buttonPlus,
  buttonMinus
})

const timer = Timer()

Events({controls, timer, sound})
