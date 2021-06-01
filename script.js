let colors = document.getElementsByClassName('color');

// Função cor aleatória
function randomColor() {
  let colorR = Math.ceil(Math.random() * 255);
  let colorG = Math.ceil(Math.random() * 255);
  let colorB = Math.ceil(Math.random() * 255);
  return `rgb(${colorR}, ${colorG}, ${colorB})`;
}
// Colocando uma cor para cada div da paleta
function setColors() {
  for (let color of colors) {
    color.style.backgroundColor = randomColor();
  }
}
setColors();
