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

const sliderForest = document.querySelector('#sliderForest')
const sliderRain = document.querySelector('#sliderRain')
const sliderCoffee = document.querySelector('#sliderCoffee')
const sliderFireplace = document.querySelector('#sliderFireplace')

let minutesDisplay = document.querySelector('.minutes')
let secondsDisplay = document.querySelector('.seconds')

const darkButton = document.querySelector('.dark')
const lightButton = document.querySelector('.light')

const body = document.body

const card = document.querySelector('.cards')

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
  sliderForest,
  sliderRain,
  sliderCoffee,
  sliderFireplace,
  minutesDisplay,
  secondsDisplay,
  darkButton,
  lightButton,
  body
}
