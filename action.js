let leftSide = '';
let rightSide = '';
let operator = '';

handleClick = (num) => {
	if (operator === '') {
		leftSide += num;
		document.getElementById('leftside').innerHTML = leftSide;
	} else {
		rightSide += num;
		document.getElementById('rightside').innerHTML = rightSide;
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
			leftSide + rightSide;
			break;
		case '-':
			break;
		case '*':
			break;
	}

	document.getElementById('answer').innerHTML = answer;
};
