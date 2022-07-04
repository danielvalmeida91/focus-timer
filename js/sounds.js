export default function () {
  const rainAudio = new Audio(
    'https://docs.google.com/uc?export=download&id=1Ip8xBqAUJ-bty51Wz8JBtX_bWXCgA0P2'
  )
  const forestAudio = new Audio(
    'https://docs.google.com/uc?export=download&id=1CRHkV72WUMdcqec5GT_KdsqFz0z3VAOA'
  )
  const coffeeAudio = new Audio(
    'https://docs.google.com/uc?export=download&id=1OxLKpCwg2wrxXFNUHgZxJ51QEt0ac5RA'
  )
  const fireplaceAudio = new Audio(
    'https://docs.google.com/uc?export=download&id=1MakaBPxJvTa_whaSM3kEbRcxiVd1GRCB'
  )

  function playCardForest() {
    forestAudio.play()
  }

  function pauseCardForest() {
    forestAudio.pause()
  }

  function playCardRain() {
    rainAudio.play()
  }

  function pauseCardRain() {
    rainAudio.pause()
  }

  function playCardCoffee() {
    coffeeAudio.play()
  }

  function pauseCardCoffee() {
    coffeeAudio.pause()
  }

  function playCardFireplace() {
    fireplaceAudio.play()
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
