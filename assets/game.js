let currentDog = {
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
  health: 100,
  pets: 0,
  moodIndex: 0
}


const dogHealth = document.getElementById('dogHealth')

function scratchEar() {
  currentDog.health = currentDog.health - 1
  dogHealth.innerHTML = currentDog.health.toString()
}

const brushTeeth = document.getElementById('brushTeeth')

function brushTeeth() {
  currentDog.health = currentDog.health - 1
  dogHealth.innerHTML = currentDog.health.toString()
}