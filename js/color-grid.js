console.log(document)
let colorGrid = document.getElementById('color-grid');
let cheeseDiv = '<div id="cheese"></div>';
colorGrid.setAttribute('style', 'display: flex; width: 100%; flex-wrap: wrap; border: 0px solid red;');
colorGrid.innerHTML = cheeseDiv;
console.log(colorGrid);

let squareStyle = `style='display: grid; height: 20px; width: 20px;'`

function addFive(divId, color) {
  let darkDiv = (i) => `<div ${squareStyle} class="${color} darken-${i}"></div>`;
  let myDiv = `<div ${squareStyle} class="${color}"></div>`;
  let lightDiv = (i) => `<div ${squareStyle} class="${color} lighten-${i}"></div>`;
  for (let i = -4; i < 6; i++) {
    if (i <0) {
      colorGrid.innerHTML += darkDiv(Math.abs(i));
    } else if (i === 0) {
      colorGrid.innerHTML += myDiv;
    } else {
      colorGrid.innerHTML += lightDiv(i);
    }
  }
}

let materializeColors = ['red', 'pink', 'purple', 'deep-purple', 'indigo', 'blue', 'light-blue', 'cyan', 'teal', 'green', 'light-green', 'lime', 'yellow', 'amber', 'orange', 'deep-orange', 'brown', 'grey', 'blue-grey'];

materializeColors.forEach(color => addFive(colorGrid, color));