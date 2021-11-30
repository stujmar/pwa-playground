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

let shrinkGrow = document.getElementById('shrink-grow');

var i = 1;                  //  set your counter to 1

function myLoop() {         //  create a loop function
  setTimeout(function() {   //  call a 3s setTimeout when the loop is called
    console.log('hello', i);   //  your code here
    i++;                    //  increment the counter
    if (i < 10) {           //  if the counter < 10, call the loop function
      myLoop();             //  ..  again which will trigger another 
    }                       //  ..  setTimeout()
  }, 1000)
}

myLoop();                   //  start the loop