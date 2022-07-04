import Controls from './controls.js'
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
