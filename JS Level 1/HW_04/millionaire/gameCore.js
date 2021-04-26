var correctAnswers = 0;
var money = 0;
var lost = false;

for(var i = 1; i <= Object.keys(questions).length; i++){
	question = eval('questions.q' + i);
	
	var answer = prompt(question.q + '\n' + 
		'1. ' + question.a1 + ' \n' +
		'2. ' + question.a2 + ' \n' +
		'3. ' + question.a3 + ' \n' +
		'4. ' + question.a4);
	if(answer == question.ac){
		correctAnswers++;
		switch (correctAnswers) {
			case 1:
				money = 1;
				break;
			case 2:
				money = 200;
				break;
			case 3:
				money = 300;
				break;
			case 4:
				money = 500;
				break;
			case 12:
				money = 125000;
				break;
			default:
				money = money * 2;
		}
		alert('Right! Your winnings: $' + money);
	} else {
		var lost = true;
		alert('Wrong... You lost.');
		money = 0;
		break;
	}
}

alert('Correct answers: ' + correctAnswers + '\n' + 'Money won: $' + money);
