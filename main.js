(() => {
  const canvas = document.querySelector('canvas');
  const contextCanvas = canvas.getContext('2d');

  // Definindo a largura e a altura do canvas
  canvas.width = canvas.height = 400;

  // Criando um retângulo
  contextCanvas.fillStyle = 'white';
  contextCanvas.fillRect(0, 0, canvas.width, canvas.height);

  let board = [
    ['O', 'X', 'O'],
    ['X', 'X', 'O'],
    ['X', 'O', 'X'],
  ];

  // Desenhando o texto no centro do canvas
  contextCanvas.fillStyle = 'red'; // Definindo a cor do texto
  contextCanvas.font = '30px Arial'; // Definindo a fonte e o tamanho do texto

  let w = canvas.width/3;
  let h = canvas.height/3;
  for(let i = 0; i < 3; i++){
    for(let j = 0; j < 3; j++) {
      let x = w * i;
      let y = h * i;
      let spot = board[i][j]
      const textWidth = contextCanvas.measureText(spot).width;
      contextCanvas.fillText(spot, x, y);
    }
  }


})();
