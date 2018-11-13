let target = {
  name: 'Mario',
  moods: [
    'Healthy',
    'Impaired',
    'KO'
  ],
  moodImgs: [
    'assets/images/mario.png',
    'assets/images/mariodefending.png',
    'assets/images/gameover.jpg'
  ],
  health: 100,
  maxHealth: 100,
  hits: 0,
  moodIndex: 0,
  items: []
}
// {
//   name: 'Luigi',
//   moods: [
//     'Healthy',
//     'Impaired',
//     'KO'
//   ],
//   moodImgs: [
//     'assets/images/luigi.png',
//     'assets/images/luigidefending.png',
//     'assets/images/gameover.jpg'
//   ],
//   health: 100,
//   hits: 0,
//   moodIndex: 0,
//   items: ['spiralSpin']
// }],

// 
// let activePlayer = target.name.mario

// let players = [mario, luigi]

let availableItems = {
  spiralSpin: { name: 'spiralSpin', modifier: 4, description: 'SPIN!' },
  capThrow: { name: 'capThrow', modifier: 6, description: 'CAP THROWN!' },
  starCoins: { name: 'starCoins', modifier: 2, description: 'STARS!' },
}

let playerHealth = document.getElementById('playerHealth')
let playerName = document.getElementById('playerName')
let hits = document.getElementById('playerHits')

function addMods() {
  let runModTotal = 0
  for (let i = 0; i < target.items.length; i++) {
    const item = target.items[i];
    runModTotal += item.modifier
  }
  return runModTotal
}

function checkHealth() {
  if (target.health > target.maxHealth) {
    target.health = target.maxHealth
  } else if (target.health < 0) {
    target.health = 0
  }
}

function spin() {
  target.items.push(availableItems.spiralSpin)
}

function capThrow() {
  target.items.push(availableItems.capThrow)
}

function starCoins() {
  target.items.push(availableItems.starCoins)
}

function slap() {
  target.health -= 1 - addMods()
  target.items = []
  checkHealth()
  target.hits += 1
  update()
}

function punch() {
  target.health -= 5 - addMods()
  target.items = []
  checkHealth()
  target.hits += 1
  update()
}

function kick() {
  target.health -= 10 - addMods()
  target.items = []
  checkHealth()
  target.hits += 1
  update()
}

function reset() {
  target.health = target.maxHealth;
  target.hits = 0
  update()
}

function update() {
  playerHealth.innerHTML = target.health.toString()
  hits.innerHTML = target.hits.toString()
  playerName.innerText = target.name
}

// MOD VARIABLES
// let spiralSpin = {
//   name: 'spiralSpin',
//   modifier: 4,
//   description: 'SPIN!'
// }

// let capThrow = {
//   name: 'capThrow',
//   modifier: 6,
//   description: 'TAKE THAT!'
// }

// let starCoins = {
//   name: 'starCoins',
//   modifier: 2,
//   description: 'STARS!'
// }

// LEANING OUT HIT: TRIALS
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

// LEFT TO DO
// - readme2 better executed
// - simplify using functions



