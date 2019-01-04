// Select color input
const color = document.querySelector("#colorPicker");
// Select size input
const height = document.querySelector("#inputHeight");
const width = document.querySelector("#inputWidth");
const table = document.querySelector ("#pixelCanvas");
// When size is submitted by the user, call makeGrid()

function makeGrid() {
  // Checks if there's an existing table, if so it deletes it
  if (table.firstChild) {
    table.removeChild(table.firstChild);
  };
  var grid = document.createElement("tbody");
  // Loops over based off users input for height & width
  for (let r = 1;r <= height.value;r++) {
    var row = document.createElement('tr');
    grid.appendChild(row);
    for (let c = 1;c <= width.value;c++) {
      var cell = document.createElement('td');
      row.appendChild(cell);
    };
  table.appendChild(grid);
  };
};

function addColorListener() {
  allCells = document.querySelectorAll("td");
    for (let c = 0;c < allCells.length; c++) {
      allCells[c].addEventListener("click", function(e) {
        e.target.style.backgroundColor = color.value;
      });
    };
};

document.querySelector("#submit").addEventListener("click", function(e) {
  e.preventDefault();
  makeGrid();
  addColorListener();
});
