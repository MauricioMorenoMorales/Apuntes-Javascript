const alphabetWar = function (parameter: string): string {
	let right = 0;
	let left = 0;
	for (const letter of [...parameter]) {
		switch (letter) {
			case 'w':
				left += 4;
			case 'p':
				left += 3;
			case 'b':
				left += 2;
			case 's':
				left += 1;
			case 'm':
				right += 4;
			case 'q':
				right += 3;
			case 'd':
				right += 2;
			case 'z':
				right += 1;
			case 'f':
				right += 23;
		}
	}
	if (right === left) return "Let's fight again!";
	return right >= left ? 'Right side wins!' : 'Left side wins';
};

console.log(alphabetWar('zdqmwpbs'), alphabetWar('wwww'));
