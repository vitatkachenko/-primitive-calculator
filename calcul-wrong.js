var inputFirst = document.getElementById('num1');
var inputSecond = document.getElementById('num2');
var inputResult = document.getElementById('result');
var buttonSum = document.getElementById('sum');
var buttonMinus = document.getElementById('minus');
var buttonMultiplication = document.getElementById('multiplication');
var buttonDivision = document.getElementById('division');
var buttonSguare = document.getElementById('sguare');
var buttonRoot = document.getElementById('root');

buttonSum.onclick = function () {
	sum();
};

buttonMinus.onclick = function () {
	minus();
};

buttonMultiplication.onclick = function() {
	multiplication();
}

buttonDivision.onclick = function() {
	division();
}

buttonSguare.onclick = function() {
	sguare();
}

buttonRoot.onclick = function() {
	root();
}

function sum() {
	inputResult.value = parseInt(inputFirst.value, 10) + parseInt(inputSecond.value, 10);
};

function minus() {
	inputResult.value = parseInt(inputFirst.value, 10) - parseInt(inputSecond.value, 10);
};

function multiplication() {
	inputResult.value = parseInt(inputFirst.value, 10) * parseInt(inputSecond.value, 10);
}

function division() {
	inputResult.value = parseInt(inputFirst.value, 10) / parseInt(inputSecond.value, 10);
}

function sguare() {
	inputResult.value = Math.pow(parseInt(inputFirst.value, 10), parseInt(inputSecond.value, 10));
}

function root() {
	inputResult.value = Math.sqrt(parseInt(inputFirst.value, 10));
}



