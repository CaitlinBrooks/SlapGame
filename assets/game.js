let playerChoice = {
  name: 'Mario',
  moods: [
    'Healthy',
    'Impaired',
    'KO'
  ],
  moodImgs: [
    'assets/mario.png',
    'assets/mariodefending.png',
    'assets/gameover.jpg'
  ],
  health: 100,
  moodIndex: 0
}

const playerHealth = document.getElementById('playerHealth')
const playerMood = document.getElementById('playerMood')

function slap() {
  playerChoice.health = playerChoice.health -= 1
  playerHealth.innerHTML = playerChoice.health.toString()
}

function punch() {
  playerChoice.health = playerChoice.health -= 5
  playerHealth.innerHTML = playerChoice.health.toString()
}

function kick() {
  playerChoice.health = playerChoice.health -= 10
  playerHealth.innerHTML = playerChoice.health.toString()
}