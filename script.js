const colors = document.getElementsByClassName('color');

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
