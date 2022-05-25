window.onload = function () {
  localStorage.setItem('selectedColor', 'black'); // Requisito 6
  // localStorage.clear();
};

// Requisito 7
function clickPallete() {
  let elementDivColor = document.getElementsByClassName('color');
  for (let index = 0; index < elementDivColor.length; index += 1) {
    elementDivColor[index].addEventListener('click', selectColor)
  }
}
clickPallete();

function styleElements() {
  let clickedDiv = document.getElementById(event.target.id);
  clickedDiv.classList.add('selected');
  clickedDiv.style.cursor = 'grabbing';
  let color = event.target.id;
  let pixelBoard = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixelBoard.length; index += 1) {
    pixelBoard[index].style.cursor = 'grabbing';
  }
  let title = document.getElementById('title');
  title.style.color = color;
  localStorage.setItem('selectedColor', color);
}

function selectColor() {
  let elementDivColor = document.getElementsByClassName('color');
  for (let index = 0; index < elementDivColor.length; index += 1) {
    elementDivColor[index].classList.remove('selected');
    elementDivColor[index].style.cursor = 'grab';
  }
  styleElements();
  // console.log('selectColor() => Selecionou a cor: ', color);
}

// Requisito 8
function clickPixel() {
  let elementPixel = document.getElementsByClassName('pixel');
  for (let index = 0; index < elementPixel.length; index += 1) {
    elementPixel[index].addEventListener('click', setPixelColor);
  }
}
clickPixel();

function setPixelColor() {
  let selectedColor = localStorage.getItem('selectedColor');
  event.target.style.backgroundColor = selectedColor;
  // console.log('Aplicou a cor: ', selectedColor);
}