window.onload = localStorage.setItem('selectedColor', 'black'); // Requisito 6 // localStorage.clear();

// Requisitos 2 e 12
const listOfColors = ['Gray', 'SlateBlue', 'Blue', 'DeepSkyBlue', 'SteelBlue', 'Aquamarine',
  'Green', 'Lime', 'Chocolate', 'SaddleBrown', 'DarkMagenta', 'Indigo', 'Magenta', 'Pink',
  'Red', 'Yellow', 'Gold', 'Thistle', 'PowderBlue'];
function createColorPalette() {
  const sectionColorPalette = document.getElementById('color-palette');
  for (let index = 0; index < 4; index += 1) {
    const randomColor = Math.floor(Math.random() * listOfColors.length);
    const divPalette = document.createElement('div');
    if (index === 0) {
      divPalette.classList.add('color', 'selected');
      divPalette.setAttribute('id', 'Black');
      divPalette.style.backgroundColor = 'Black';
      sectionColorPalette.appendChild(divPalette);
    } else {
      divPalette.classList.add('color');
      divPalette.setAttribute('id', listOfColors[randomColor]);
      divPalette.style.backgroundColor = listOfColors[randomColor];
      sectionColorPalette.appendChild(divPalette);
    }
  }
}
createColorPalette();

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

// Requisitos 4 e 5
function createBoard(size) {
  const sectionPixelBoard = document.getElementById('pixel-board');
  while (sectionPixelBoard.firstChild) {
    sectionPixelBoard.removeChild(sectionPixelBoard.firstChild);
  }
  // Requisito 11
  let minMaxSize = size;
  if (size < 5) minMaxSize = 5;
  if (size > 50) minMaxSize = 50;
  const boardSize = minMaxSize * minMaxSize;
  for (let index = 0; index < boardSize; index += 1) {
    const divPixel = document.createElement('div');
    divPixel.classList.add('pixel');
    sectionPixelBoard.appendChild(divPixel);
    divPixel.addEventListener('click', setPixelColor); // A função setPixelColor está abaixo, como pode ser chamada antes?
  }
  sectionPixelBoard.style.width = `${(size * 40)}px`;
}
const defaultBoard = 5;
createBoard(defaultBoard);

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

// Bônus
// Requisito 10
function generateBoard() {
  const inputBoard = document.getElementById('board-size');
  if (inputBoard.value === '' || inputBoard.value === null) {
    alert('Board inválido!');
  // } else if (inputBoard.value < 5 || inputBoard.value > 50) {
  //   alert('Só é permitido valores entre 5 e 50!');
  } else {
    createBoard(inputBoard.value);
  }
}

function clickGenerateButton() {
  const generateButton = document.getElementById('generate-board');
  generateButton.addEventListener('click', generateBoard);
}
clickGenerateButton();
