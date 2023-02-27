export default function() {
  const forestSound = new Audio('../sounds/florest.wav')
  const rainSound = new Audio('../sounds/rain.wav')
  const cafeteriaSound = new Audio('../sounds/coffee.wav')
  const fireSound = new Audio('../sounds/fire.wav')
  const buttonPressAudio = new Audio('../sounds/pressButton.wav')
  const kitchenSound = new Audio('../sounds/timeFinished.mp3')

  forestSound.loop = true
  rainSound.loop = true
  cafeteriaSound.loop = true
  fireSound.loop = true

  function pressButton() {
    buttonPressAudio.play()
  }

  function timeEnd() {
    kitchenSound.play()
  }

  function changeVolume(music, volume) {
    let selectSongs = {
      forestSound: forestSound,
      rainSound: rainSound,
      cafeteriaSound: cafeteriaSound,
      fireSound: fireSound
    }

    const newMusic = selectSongs[music]

    newMusic.volume = volume
  }

  let currentSong = null

  function selectMusic(music) { 

    let selectSongs = {
      forestSound: forestSound,
      rainSound: rainSound,
      cafeteriaSound: cafeteriaSound,
      fireSound: fireSound
    }

    const newMusic = selectSongs[music]
    const isPlayingSong = currentSong === newMusic

    if(isPlayingSong) {
      newMusic.pause()
      currentSong = null
      return
    }

    if(currentSong) {
      currentSong.pause()
    }

    newMusic.play()
    currentSong = newMusic
  }

  return {
    pressButton,
    selectMusic,
    timeEnd,
    changeVolume
  }
}