const buttonPlay = document.querySelector('.play')
const buttonStop = document.querySelector('.stop')
const buttonPlus = document.querySelector('.plus')
const buttonMinus = document.querySelector('.minus')

const cardForest = document.querySelector('.forest')
const cardRain = document.querySelector('.rain')
const cardCoffee = document.querySelector('.coffee')
const cardFireplace = document.querySelector('.fireplace')

const svgForest = document.querySelector('#svgForest')
const svgRain = document.querySelector('#svgRain')
const svgCoffee = document.querySelector('#svgCoffee')
const svgFireplace = document.querySelector('#svgFireplace')

let minutesDisplay = document.querySelector('.minutes')
let secondsDisplay = document.querySelector('.seconds')

export {
  buttonPlay,
  buttonStop,
  buttonPlus,
  buttonMinus,
  cardCoffee,
  cardRain,
  cardForest,
  cardFireplace,
  svgForest,
  svgRain,
  svgCoffee,
  svgFireplace,
  minutesDisplay,
  secondsDisplay
}
