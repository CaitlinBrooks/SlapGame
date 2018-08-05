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
  hits: 0,
  moodIndex: 0
}

let playerHealth = document.getElementById('playerHealth')
let Name = document.getElementById('Name')
let hits = document.getElementById('hits')

function slap() {
  playerChoice.health = playerChoice.health -= 1
  playerHealth.innerHTML = playerChoice.health.toString()
  hits.innerHTML = playerChoice.hits.toString()
}

function punch() {
  playerChoice.health = playerChoice.health -= 5
  playerHealth.innerHTML = playerChoice.health.toString()
}

function kick() {
  playerChoice.health = playerChoice.health -= 10
  playerHealth.innerHTML = playerChoice.health.toString()
}

function update() {
  hits = document.getElementById('playerHits')
}

update()


// function hit() {
//   playerChoice.hits = playerChoice.health += 1
//   hits.innerHTML = playerChoice.hits.toString()
// }

// function hit() {
//   playerChoice.hits = playerChoice.hits++
//   playerHits.innerHTML = playerChoice.hits.toString()
// }

// function hit() {
//   playerChoice.hits = playerChoice.hits =+ 1
//   if (playerChoice.hits % playerChoice.hits == 0) {
//   }
//   hit()
// }

