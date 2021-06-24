const tapCodeTranslation = function (input: string): string {
	const dictionary: any = {
		a: '. . ',
		b: '. .. ',
		c: '. ... ',
		d: '. .... ',
		e: '. ..... ',
		f: '.. . ',
		g: '.. .. ',
		h: '.. ... ',
		i: '.. .... ',
		j: '.. ..... ',
		k: '. ... ',
		l: '... . ',
		m: '... .. ',
		n: '... ... ',
		o: '... .... ',
		p: '... ..... ',
		q: '.... . ',
		r: '.... .. ',
		s: '.... ... ',
		t: '.... .... ',
		u: '.... ..... ',
		v: '..... . ',
		w: '..... .. ',
		x: '..... ... ',
		y: '..... .... ',
		z: '..... ..... ',
	};
	let response: string = '';
	for (const letter of input) {
		response = response + dictionary[letter];
	}
	return response.slice(0, -1);
};

console.log(tapCodeTranslation('xd'));
