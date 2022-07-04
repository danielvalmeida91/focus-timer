import Sound from './sounds.js'
export default function Controls({
}) {
  const sounds = Sound()

  function cardPlaying(playing, selected) {
    if (!cardSelected(playing)) {
      playing.classList.add('selected')
      selected.setAttribute('fill', 'white')
      if (playing.classList.contains('forest')) {
        sounds.playCardForest()
      } else if (playing.classList.contains('rain')) {
        sounds.playCardRain()
      } else if (playing.classList.contains('coffee')) {
        sounds.playCardCoffee()
      } else {
        sounds.playCardFireplace()
      }
    } else {
      playing.classList.remove('selected')
      selected.setAttribute('fill', '#323328')
      if (playing.classList.contains('forest')) {
        sounds.pauseCardForest()
      } else if (playing.classList.contains('rain')) {
        sounds.pauseCardRain()
      } else if (playing.classList.contains('coffee')) {
        sounds.pauseCardCoffee()
      } else {
        sounds.pauseCardFireplace()
      }
    }
  }

  function cardSelected(playing) {
    if (playing.classList.contains('selected')) {
      return true
    } else return false
  }

  return {
    cardPlaying
  }
}
