let board = [
  ['O', 'X', 'O'],
  ['X', 'X', 'O'],
  ['X', 'O', 'X'],
];

let player1 = 'X';
let player2 = 'O';

function setup() {
  let canvas = createCanvas(400, 400);
  canvas.parent('canvas-container'); // Defina o pai do canvas
  background(255, 204, 0);
}

function windowResized() {
  centerCanvas(); // Recentraliza o canvas ao redimensionar a janela
}
