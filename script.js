window.onload = localStorage.setItem('selectedColor', 'black'); // Requisito 6 // localStorage.clear();

// Requisito 7
function styleElements(event) {
  const clickedDiv = document.getElementById(event.target.id);
  clickedDiv.classList.add('selected');
  clickedDiv.style.cursor = 'grabbing';
  const color = event.target.id;
  const pixelBoard = document.getElementsByClassName('pixel');
  for (let index = 0; index < pixelBoard.length; index += 1) {
    pixelBoard[index].style.cursor = 'grabbing';
  }
  const title = document.getElementById('title');
  title.style.color = color;
  localStorage.setItem('selectedColor', color);
}

function selectColor(event) {
  const elementDivColor = document.getElementsByClassName('color');
  for (let index = 0; index < elementDivColor.length; index += 1) {
    elementDivColor[index].classList.remove('selected');
    elementDivColor[index].style.cursor = 'grab';
  }
  styleElements(event);
  // console.log('selectColor() => Selecionou a cor: ', color);
}

function clickPalette() {
  const elementDivColor = document.getElementsByClassName('color');
  for (let index = 0; index < elementDivColor.length; index += 1) {
    elementDivColor[index].addEventListener('click', selectColor);
  }
}
clickPalette();

// Requisito 8
function setPixelColor(event) {
  const selectedColor = localStorage.getItem('selectedColor');
  const pixelSquare = event;
  pixelSquare.target.style.backgroundColor = selectedColor;
  // console.log('Aplicou a cor: ', selectedColor);
}

function clickPixel() {
  const elementPixel = document.getElementsByClassName('pixel');
  for (let index = 0; index < elementPixel.length; index += 1) {
    elementPixel[index].addEventListener('click', setPixelColor);
  }
}
clickPixel();

// Requisito 9
function clearPixelBoard() {
  const elementPixel = document.getElementsByClassName('pixel');
  for (let index = 0; index < elementPixel.length; index += 1) {
    elementPixel[index].style.backgroundColor = 'white';
  }
}

function clickClearButton() {
  const clearButton = document.getElementById('clear-board');
  clearButton.addEventListener('click', clearPixelBoard);
}
clickClearButton();
