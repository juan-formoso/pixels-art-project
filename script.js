function boardPosition() {
  const boardHigh = 5;
  const boardLarge = 5;
  const position = document.getElementById('pixel-board'); 
  for (let i = 0; i < boardHigh; i += 1) {
    const column = position.insertRow(0);
    for (let x = 0; x < boardLarge; x += 1) {
      const cell = column.insertCell(0);
      cell.classList.add('pixel');
      cell.style.backgroundColor = 'white';
    }
  }
}
boardPosition();

const black = document.querySelector('.black');

window.addEventListener('load', function() {
  black.classList.add('selected');
})

const colors = document.querySelectorAll('.color');
const divColors = document.body.children[0].children[1];
const selectColor = document.querySelector('.selected');

function selectedPallet(event) {
  for (let index = 0; index < colors.length; index += 1) {
    if (colors[index].classList.length === 3) {
      event.target.parentElement.children[index].classList.remove('selected');
    }
    if (colors[index].classList.length === 2) {
      event.target.classList.add('selected');
    }
  }
}

divColors.addEventListener('click', selectedPallet);
