const currentDog = {
  name: 'Bree',
  moods: [
    'Chill',
    'Excited',
    'Zoomies'
  ],
  moodImgs: [
    'assets/blackdog.jpg',
    'assets/dogzoomies',
    'assets/dirtyhouse'
  ],
  health: 5,
  pets: 0,
  moodIndex: 0
}

var health = 100

const dogHealth = document.getElementById('health')

function scratchEar() {
  health--;
  if (currentDog.scratchEar % currentDog.health == 0) {
    currentDog.moodIndex--
  }
  return alert(health)
}
