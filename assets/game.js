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
  tolerance: 5,
  pets: 0,
  moodIndex: 0
}

var health = 100

function pet() {
  currentDog.pets++;
  if (currentDog.pets % currentDog.tolerance == 0) {
    currentDog.moodIndex++
  }
}