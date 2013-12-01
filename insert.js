var inputs = document.querySelectorAll("input[type=text]");
for (var i = 0; i < inputs.length; ++i) {
	console.log(inputs[i]);
	inputs[i].setAttribute("x-webkit-speech", "x-webkit-speech");
}