let leftSide = '';
let rightSide = '';
let operator = '';
let equalHasBeenPressed = false;

let leftsideSpan = document.getElementById('leftside');
let rightsideSpan = document.getElementById('rightside');
let operatorSpan = document.getElementById('operator');
let answerSpan = document.getElementById('answer');

handleClick = (num) => {
	if (operator === '') {
		leftSide += num;
		leftsideSpan.innerHTML = leftSide;
	} else {
		rightSide += num;
		rightsideSpan.innerHTML = rightSide;
	}
};

chooseOperator = (incomingOperator) => {
	operator = incomingOperator;
	document.getElementById('operator').innerHTML = operator;
};

evaluateAnswer = () => {
	let answer = '';
	switch (operator) {
		case '+':
			answer = parseInt(leftSide) + parseInt(rightSide);
			break;
		case '-':
			answer = parseInt(leftSide) - parseInt(rightSide);
			break;
		case '*':
			answer = parseInt(leftSide) * parseInt(rightSide);
		case '/':
			answer = parseInt(leftSide) / parseInt(rightSide);
			break;
	}

	console.log("answer: ", answer)

	document.getElementById('answer').innerHTML = answer;

	if (answer === Infinity) {
	answerSnap.innerHTML = "errOr"
	} else {
		answerSpan.innerHTML = answer
}

	leftsideSpan.innerHTML = '';
	rightsideSpan.innerHTML = '';
	operatorSpan.innerHTML = '';

	operator = '';
	leftSide = '';
	rightSide = '';
};
