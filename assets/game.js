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

function slap() {
  playerChoice.health = playerChoice.health - 1
  playerHealth.innerHTML = playerChoice.health.toString()
}