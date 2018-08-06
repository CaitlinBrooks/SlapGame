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
  hits: 0,
  moodIndex: 0,
  items: ['capThrow']
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

let items = {
  spiralSpin: { name: 'spiralSpin', modifier: 4, description: 'SPIN!' },
  capThrow: { name: 'capThrow', modifier: 6, description: 'TAKE THAT!' },
  starCoins: { name: 'starCoins', modifier: 2, description: 'STARS!' },
}

let playerHealth = document.getElementById('playerHealth')
let playerName = document.getElementById('playerName')
let hits = document.getElementById('playerHits')

// let runModTotal =

// function addMods() {
//   for (let i = 0; i < items.length; i++) {
//     const runModTotal = items[i];
//   }
//   return 
// }

function spin() {
  target.health = target.health += 4
  playerHealth.innerHTML = target.health.toString()
  // target.health -= damage + addMods();
}

function capThrow() {
  target.health = target.health += 6
  playerHealth.innerHTML = target.health.toString()
  // target.health -= damage + addMods();
}

function starCoins() {
  target.health = target.health += 2
  playerHealth.innerHTML = target.health.toString()
  // target.health -= damage + addMods();
}

function slap() {
  target.health = target.health -= 1
  playerHealth.innerHTML = target.health.toString()
  // target.health -= damage + addMods();
  target.hits = target.hits += 1
  hits.innerHTML = target.hits.toString()
  playerName.innerText = target.name
}

function punch() {
  target.health = target.health -= 5
  playerHealth.innerHTML = target.health.toString()
  // target.health -= damage + addMods();
  target.hits = target.hits += 1
  hits.innerHTML = target.hits.toString()
  playerName.innerText = target.name
}

function kick() {
  target.health = target.health -= 10
  playerHealth.innerHTML = target.health.toString()
  // target.health -= damage + addMods();
  target.hits = target.hits += 1
  hits.innerHTML = target.hits.toString()
  playerName.innerText = target.name
}


function update() {
  hits = document.getElementById('playerHits')
}

update();

// Math.floor(Math.random() * 100 + 1)


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
