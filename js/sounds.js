import {
  sliderForest,
  sliderRain,
  sliderFireplace,
  sliderCoffee
} from './elements.js'
export default function () {
  const github = false

  const rainAudio = new Audio(
    github
      ? 'https://docs.google.com/uc?export=download&id=1Ip8xBqAUJ-bty51Wz8JBtX_bWXCgA0P2'
      : './../sounds/rain.wav'
  )
  const forestAudio = new Audio(
    github
      ? 'https://docs.google.com/uc?export=download&id=1CRHkV72WUMdcqec5GT_KdsqFz0z3VAOA'
      : './../sounds/forest.wav'
  )
  const coffeeAudio = new Audio(
    github
      ? 'https://docs.google.com/uc?export=download&id=1OxLKpCwg2wrxXFNUHgZxJ51QEt0ac5RA'
      : './../sounds/coffee.wav'
  )
  const fireplaceAudio = new Audio(
    github
      ? 'https://docs.google.com/uc?export=download&id=1MakaBPxJvTa_whaSM3kEbRcxiVd1GRCB'
      : './../sounds/fireplace.wav'
  )

  function playCardForest() {
    forestAudio.play()
    forestAudio.volume = Number(sliderForest.value / 100)
  }

  function pauseCardForest() {
    forestAudio.pause()
  }

  function playCardRain() {
    rainAudio.play()
    rainAudio.volume = Number(sliderRain.value / 100)
  }

  function pauseCardRain() {
    rainAudio.pause()
  }

  function playCardCoffee() {
    coffeeAudio.play()
    coffeeAudio.volume = Number(sliderCoffee.value / 100)
  }

  function pauseCardCoffee() {
    coffeeAudio.pause()
  }

  function playCardFireplace() {
    fireplaceAudio.play()
    fireplaceAudio.volume = Number(sliderFireplace.value / 100)
  }

  function pauseCardFireplace() {
    fireplaceAudio.pause()
  }

  return {
    playCardForest,
    pauseCardForest,
    playCardRain,
    pauseCardRain,
    playCardCoffee,
    pauseCardCoffee,
    playCardFireplace,
    pauseCardFireplace
  }
}
