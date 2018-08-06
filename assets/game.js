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
  moodIndex: 0,
  spiralSpin: 5
}
// {
//   name: 'Luigi',
//   moods: [
//     'Healthy',
//     'Impaired',
//     'KO'
//   ],
//   moodImgs: [
//     'assets/',
//     'assets/',
//     'assets/'
//   ],
//   health: 100,
//   hits: 0,
//   moodIndex: 0,
//   capThrow: 4
// }],


let playerHealth = document.getElementById('playerHealth')
let playerName = document.getElementById('playerName')
let hits = document.getElementById('playerHits')

function slap() {
  playerChoice.health = playerChoice.health -= 1
  playerHealth.innerHTML = playerChoice.health.toString()
  playerChoice.hits = playerChoice.hits += 1
  hits.innerHTML = playerChoice.hits.toString()
  playerName.innerText = playerChoice.name
}

function punch() {
  playerChoice.health = playerChoice.health -= 5
  playerHealth.innerHTML = playerChoice.health.toString()
  playerChoice.hits = playerChoice.hits += 1
  hits.innerHTML = playerChoice.hits.toString()
  playerName.innerText = playerChoice.name
}

function kick() {
  playerChoice.health = playerChoice.health -= 10
  playerHealth.innerHTML = playerChoice.health.toString()
  playerChoice.hits = playerChoice.hits += 1
  hits.innerHTML = playerChoice.hits.toString()
  playerName.innerText = playerChoice.name
}

function update() {
  hits = document.getElementById('playerHits')
}


var spiralSpin = {
  name: 'spiralSpin',
  modifier: 4,
  description: 'SPIN!'
}

var capThrow = {
  name: 'capThrow',
  modifier: 6,
  description: 'TAKE THAT!'
}

var starCoins = {
  name: 'starCoins',
  modifier: 2,
  description: 'HELPFUL STARS!'
}


update();


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
