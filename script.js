const colors = document.getElementsByClassName('color');
const pixelBoard = document.getElementById('pixel-board');

// Função cor aleatória
function randomColor() {
  const colorR = Math.ceil(Math.random() * 255);
  const colorG = Math.ceil(Math.random() * 255);
  const colorB = Math.ceil(Math.random() * 255);
  return `rgb(${colorR}, ${colorG}, ${colorB})`;
}
// Colocando uma cor para cada div da paleta
function setColors() {
  for (let i = 0; i < colors.length; i += 1) {
    if (i === 0) {
      colors[i].style.backgroundColor = 'black';
    } else {
      colors[i].style.backgroundColor = randomColor();
    }
  }
}
setColors();

// Função para gerar colunas e linhas da tabela
// Função que gera células
function generateCell(size, row) {
  for (let i = 0; i < size; i += 1) {
    const cell = document.createElement('td');
    row.appendChild(cell);
    cell.classList = 'pixel';
  }
}
// Função que gera linhas
function generatePixelBoard(size) {
  for (let i = 0; i < size; i += 1) {
    const row = document.createElement('tr');
    pixelBoard.appendChild(row);
    generateCell(size, row);
  }
}
generatePixelBoard(5);

// Iniciar a página com a cor preta selecionada
function initializeBlack() {
  colors[0].classList.add('selected');
}
initializeBlack();

// Função para remover a classe selected
function removeSelected() {
  for (let i = 0; i < colors.length; i += 1) {
    if (colors[i].classList.contains('selected')) {
      colors[i].classList.remove('selected');
    }
  }
}
// Função para clicar e selecionar cor
function changeSelected(event) {
  removeSelected();
  event.target.classList.add('selected');
}
for (let i = 0; i < colors.length; i += 1) {
  colors[i].addEventListener('click', changeSelected);
}
