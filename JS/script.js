// plik scripts.js

var buttons = document.getElementsByClassName('button');

for (var i = 0; i < buttons.length; i++){
  console.log(buttons[i].innerText)  
}
// onClick 
function kliknij() {
	alert('Przycisk 1');
}
function kliknij2() {
	alert('Przycisk 2 ');
}
function kliknij3() {
	alert('Przycisk 3 ');
}