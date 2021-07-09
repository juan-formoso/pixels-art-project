let defaultColor = document.querySelector('.black');
window.addEventListener('load', function() {
  defaultColor.classList.add('selected');
})

let colors = document.querySelectorAll('.color');
let boxColors = document.body.children[0].children[1];
let selectColor = document.querySelector('.selected');

function selectedPalette(event) {
  for (let index = 0; index < colors.length; index += 1) {
    if (colors[index].classList.length === 3) {
      event.target.parentElement.children[index].classList.remove('selected');
    }
    if (colors[index].classList.length === 2) {
      event.target.classList.add('selected');
    }
  }
}

boxColors.addEventListener('click', selectedPalette);

let table = document.querySelector('#pixel-board');
function copySelectedColor(event) {
  if (colors[0].classList.length === 3) {
    event.target.style.backgroundColor = 'black';
  }
  if (colors[1].classList.length === 3) {
    event.target.style.backgroundColor = '#34568b';
  }
  if (colors[2].classList.length === 3) {
    event.target.style.backgroundColor = '#ff6f61';
  }
  if (colors[3].classList.length === 3) {
    event.target.style.backgroundColor = '#88b04b';
  }
}

table.addEventListener('click', copySelectedColor);

let clear = document.querySelector('#clear-board');
let cell = document.querySelectorAll('td');
function clearGrid () {
  for (let index = 0; index < cell.length; index += 1) {
    cell[index].style.backgroundColor = 'white';
  }
}

clear.addEventListener('click', clearGrid);