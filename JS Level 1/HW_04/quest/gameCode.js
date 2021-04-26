var event, ok, log = [];

function startGame() {
	log[0] = 'Move number: ' + counter + ' (Press "q" to exit)' + '\n\n' + works.a00 + works.a1 + works.a2;
	do {
		ok = false;
		event = prompt('Move number: ' + counter + ' (Press "q" to exit)' + '\n\n' + works.a00 + works.a1 + works.a2);
		if (event == 'q') {
			break;
		}
		else {
			ok = isAnswer(works.a0, event);
		}
	} while (!ok);
	switch (event) {
		case '1': // First level
			log[1] = 'Move number: ' + counter + ' (Press "q" to exit)' + '\n\n' + works.b00 + works.b1 + works.b2;
			do {
				ok = false;
				event = prompt('Move number: ' + counter + ' (Press "q" to exit)' + '\n\n' + works.b00 + works.b1 + works.b2);
				if (event == 'q') {
					break;
				}
			   else {
					ok = isAnswer(works.b0, event);
				}
			} while (!ok);
			switch (event) {
				case '1': // Second level
					log[2] = 'Move number: ' + counter + ' (Press "q" to exit)' + '\n\n' + works.d00 + works.d1 + works.d2;
					do {
						ok = false;
						event = prompt('Move number: ' + counter + ' (Press "q" to exit)' + '\n\n' + works.d00 + works.d1 + works.d2);
						if (event == 'q') {
							break;
						}
						else {
							ok = isAnswer(works.d0, event);
						}
					} while (!ok);
					break;
				case '2': // Second level
					log[2] = 'Move number: ' + counter + ' (Press "q" to exit)' + '\n\n' + works.d00 + works.d1 + works.d2;
					do {
						ok = false;
						event = prompt('Move number: ' + counter + ' (Press "q" to exit)' + '\n\n' + works.d00 + works.d1 + works.d2);
						if (event == 'q') {
							break;
						}
						else {
							ok = isAnswer(works.d0, event);
						}
					} while (!ok);
					break;
				case 'q': // Second level
					break;
				default:
					alert('Error');
			}
			break;
		case '2': // First level
			log[1] = 'Move number: ' + counter + ' (Press "q" to exit)' + '\n\n' + works.c00 + works.c1 + works.c2;
			do {
				ok = false;
				event = prompt('Move number: ' + counter + ' (Press "q" to exit)' + '\n\n' + works.c00 + works.c1 + works.c2);
				if (event == 'q') {
					break;
				}
				else {
					ok = isAnswer(works.c0, event);
				}
			} while (!ok);
			switch (event) {
				case '1': // Second level
					log[2] = 'Move number: ' + counter + ' (Press "q" to exit)' + '\n\n' + works.d00 + works.d1 + works.d2;
					do {
						ok = false;
						event = prompt('Move number: ' + counter + ' (Press "q" to exit)' + '\n\n' + works.d00 + works.d1 + works.d2);
						if (event == 'q') {
							break;
						}
						else {
							ok = isAnswer(works.d0, event);
						}
					} while (!ok);
					break;
				case '2': // Second level
					log[2] = 'Move number: ' + counter + ' (Press "q" to exit)' + '\n\n' + works.d00 + works.d1 + works.d2;
					do {
						ok = false;
						event = prompt('Move number: ' + counter + ' (Press "q" to exit)' + '\n\n' + works.d00 + works.d1 + works.d2);
						if (event == 'q') {
							break;
						}
						else {
							ok = isAnswer(works.d0, event);
						}
					} while (!ok);
					break;
				case 'q': // Second level
					break;
				default:
					alert('Error');
			}
			break;
		case 'q': // First level
			break;
		default:
			alert('Error');
	}
	alert('Thanks for the game');
}

//------------------------------------------
function isAnswer(q, event) {
	if (isNaN(event) || !isFinite(event)) {
		alert('You entered an invalid character');
		return false;
	}
	else if (event < 1 || event > q) {
		alert('Your number is out of range');
		return false;
	}
	else {
		return true;
	}
}

//------------------------------------------
function logGame() {
	var num = parseInt(prompt('Please, enter your move number'));
	num--;
	if (num >= 0 && num < log.length) {
		alert(log[num]);
	} else {
		alert('Incorrect move number! Total moves: ' + log.length);
	}
}