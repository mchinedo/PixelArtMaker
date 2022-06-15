// Select color input
let newColor = document.getElementById("colorPicker");

// Select size input
const newForm = document.getElementById("sizePicker");

var height = document.getElementById("inputHeight");
var width = document.getElementById("inputWidth");

//creates an event listener for the tag that will contain the grid
newForm.addEventListener("submit", function() {
	event.preventDefault();
	makeGrid(height.value, width.value);

	//console.log("Height: " + height.value + " and Width: " + width.value);
});

// When size is submitted by the user, call makeGrid()

function makeGrid() {

	//restarts the grid when new inputs are added,
	//the innerhtml of the pixel canvas is replaced to be blank and we want this to be done after the grid function is called but before the actual grid is made
	const newGrid = document.getElementById("pixelCanvas");
	newGrid.innerHTML = " ";

	for (let r = 0; r < height.value; r++) {

		//we create a row and add it to the empty canvas
		var row = document.createElement("tr");
		document.getElementById("pixelCanvas").append(row);

		for (let c = 0; c < width.value; c++) {

			//for each row, we then add a column to that row that was added to the canvas
			var column = document.createElement("td");
			row.append(column);
			// This helps select the color using DOM and selecting the specific value.
			column.addEventListener("click", function addColor(event) {
				event.target.style.backgroundColor = newColor.value;
			});
		}
	}
}
