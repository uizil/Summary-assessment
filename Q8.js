var input = document.getElementById('input');
var color = document.getElementById('color');
var button = document.getElementById('button');
var ul = document.getElementById('ul')

button.onclick = function() {
	
	if(color.value === "blue" || color.value === "red" || color.value === "yellow" ){
		ul.innerHTML += '<li class = "' + color.value +'">' + input.value + '</li>';
	}
	
}