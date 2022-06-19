const O_CLASS = 'circle'
const X_CLASS = 'x'

const cells = document.querySelectorAll('.cell')
const canvas = document.getElementById('canvas')
let playerturn = true

const gameStatus = document.getElementById('game-status')
const statusHeader = document.getElementById('status')
const restartButton = document.getElementById("game-status-button")

let switchturns = () => {
  playerturn = !playerturn
}

const winningPos = [
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,4,8],
  [2,4,6]
]

cells.forEach(cell => cell.addEventListener('click', () => {
  if (playerturn) {
    cell.classList.add(X_CLASS)
    canvas.classList.remove('x')
    canvas.classList.add('circle')
    switchturns()
  } else {
    cell.classList.add(O_CLASS)
    canvas.classList.remove('circle')
    canvas.classList.add('x')
    switchturns()
  }
  if (checkXWin()) {
    statusHeader.innerHTML = 'X wins'
    gameStatus.classList.add('show')
  }
  else if (checkOWin()) {
    statusHeader.innerHTML = 'O wins'
    gameStatus.classList.add('show')
  }
  else if (checkDraw()) {
    statusHeader.innerHTML = 'Draw'
    gameStatus.classList.add('show')
  }
}, {once: true}))

const checkXWin = () => winningPos.some(pos => pos.every(num => canvas.children[num].classList.contains('x')))
const checkOWin = () => winningPos.some(pos => pos.every(num => canvas.children[num].classList.contains('circle')))
const checkDraw = () => Array.from(cells).every(cell => cell.classList.contains('x') || cell.classList.contains('circle'))

restartButton.addEventListener('click', () => location.reload())
