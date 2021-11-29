console.log(document)
let colorGrid = document.getElementById('color-grid');
myDiv = "<div>hello world</div>"
colorGrid.setAttribute('style', 'display: grid; height: 10px; width: 10px; border: 2px solid red;');
colorGrid.innerHTML = myDiv;
console.log(colorGrid);