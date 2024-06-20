let board = [
  ['O', 'X', 'O'],
  ['X', 'X', 'O'],
  ['X', 'O', 'X'],
];

let player1 = 'X';
let player2 = 'O';
let w, h;

function setup() {
  let canvas = createCanvas(400, 400);
  canvas.parent('canvas-container');
}

function draw() {
  background(255, 204, 0);

  w = width / 3;
  h = height / 3;

  for (let j = 0; j < 3; j++) {
    for (let i = 0; i < 3; i++) {
      let x = w * i + w / 2;
      let y = h * j + h / 2;
      let spot = board[j][i]; // Corrigir a ordem de indexação para [j][i]
      textSize(32);
      strokeWeight(4);
      if (spot == player2) {
        noFill();
        ellipse(x, y, w / 2);
      } else if (spot == player1) {
        let xr = w / 4;
        line(x - xr, y - xr, x + xr, y + xr);
        line(x + xr, y - xr, x - xr, y + xr);
      }
    }
  }
}
