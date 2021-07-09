const black = document.querySelector('.black');

window.addEventListener('load', function() {
  black.classList.add('selected')
})

const colors = document.querySelectorAll('.color');
const divColors = document.body.children[1];

function selectedPallete(event) {
  for (let index = 0; index < colors.length; index += 1) {
    if (colors[index].classList.length === 3) {
      event.target.parentElement.children[index].classList.remove('selected');
    }
    if (colors[index].classList.length === 2) {
      event.target.classList.add('selected');
    }
    
  }
}
  
divColors.addEventListener('click', selectedPallete);
