
var canvas = document.getElementById("pixel_canvas");
var height = document.getElementById("input_height");
var width = document.getElementById("input_width");
var sizePicker = document.getElementById("sizePicker");
var color = document.getElementById("colorPicker");

color.addEventListener("click", function(){});

sizePicker.onsubmit = function(event){
event.preventDefault();
clearGrid();
makeGrid();
};

function makeGrid() {
    for (var r = 0; r<height.value; r += 1){
        const row = canvas.insertRow(r);
        for (var c = 0; c<width.value; c += 1){
            const cell = row.insertCell(c);
            cell.addEventListener("click", fillSquare);
        }
    }
}

function clearGrid(){
    while (canvas.firstChild){
         canvas.removeChild(canvas.firstChild);
    }
}

function fillSquare () {
    this.setAttribute("style", `background-color: ${color.value}`);
}
