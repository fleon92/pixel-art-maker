// Select color input
const color = document.querySelector("#colorPicker");
// Select size input
const height = document.querySelector("#inputHeight");
const width = document.querySelector("#inputWidth");
const table = document.querySelector("#pixelCanvas");
// When size is submitted by the user, call makeGrid()

// This function creates a grid using user's input for width & height
function makeGrid() {
  // This removes the rows & cells in-case there are existing elements
  // To the user, if they select the same settings it will look like a reset
  table.innerHTML = "";
  var grid = document.createElement("tbody");
  // Loops over based off users input for height & width
  for (let r = 1; r <= height.value; r++) {
    var row = document.createElement("tr");
    grid.appendChild(row);
    for (let c = 1; c <= width.value; c++) {
      var cell = document.createElement("td");
      row.appendChild(cell);
    }
    // This is what the user sees, a grid appended to the bottom of their page
    table.appendChild(grid);
  }
}

// To make this code modular, i made adding the listeners into a seperate function
function addColorListener() {
  allCells = document.querySelectorAll("td");
  for (let c = 0; c < allCells.length; c++) {
    allCells[c].addEventListener("click", function(e) {
      e.target.style.backgroundColor = color.value;
    });
  }
}

// when submit is hit, the default is prevented & instead our functions are called
document.querySelector("#submit").addEventListener("click", function(e) {
  e.preventDefault();
  makeGrid();
  addColorListener();
});
