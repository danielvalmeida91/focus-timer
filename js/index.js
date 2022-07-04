import Controls from './controls.js'
import Timer from './timer.js'
import {
  buttonPlay,
  buttonStop,
  buttonMinus,
  buttonPlus,
  cardForest,
  cardRain,
  cardCoffee,
  cardFireplace,
  minutesDisplay,
  secondsDisplay,
  svgCoffee,
  svgForest,
  svgRain,
  svgFireplace
} from './elements.js'

const controls = Controls({
  cardForest,
  cardRain,
  cardCoffee,
  cardFireplace,
  svgForest,
  svgRain,
  svgCoffee,
  svgFireplace
})

const timer = Timer({
  minutesDisplay,
  secondsDisplay
})

buttonPlay.addEventListener('click', () => {
  timer.countdown()
})

buttonStop.addEventListener('click', () => {
  timer.hold()
})

buttonPlus.addEventListener('click', () => {
  let minutes = Number(minutesDisplay.textContent)

  timer.updateMinutes(minutes)
  timer.add()
})

buttonMinus.addEventListener('click', () => {
  let minutes = Number(minutesDisplay.textContent)
  timer.subtract()
  timer.updateMinutes(minutes)
})

cardForest.addEventListener('click', () => {
  controls.cardPlaying(cardForest, svgForest)
})

cardRain.addEventListener('click', () => {
  controls.cardPlaying(cardRain, svgRain)
})

cardCoffee.addEventListener('click', () => {
  controls.cardPlaying(cardCoffee, svgCoffee)
})

cardFireplace.addEventListener('click', () => {
  controls.cardPlaying(cardFireplace, svgFireplace)
})
