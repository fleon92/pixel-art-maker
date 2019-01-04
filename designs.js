// Select color input
const color = document.querySelector("#colorPicker");
// Select size input
const height = document.querySelector("#inputHeight");
const width = document.querySelector("#inputWidth");
const table = document.querySelector ("#pixelCanvas");
// When size is submitted by the user, call makeGrid()

function makeGrid() {
  if (table.firstChild) {
    table.removeChild(table.firstChild);
  };
  var grid = document.createElement("tbody");
  for (let r = 1;r <= height.value;r++) {
    var row = document.createElement('tr');
    grid.appendChild(row);
    for (let c = 1;c <= width.value;c++) {
      var cell = document.createElement('td')
      row.appendChild(cell);
    };
  table.appendChild(grid);
  };
};

document.querySelector("#submit").addEventListener("click", function(e) {
  e.preventDefault();
  makeGrid();
});
