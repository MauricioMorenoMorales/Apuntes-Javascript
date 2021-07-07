const headSmash = ($: Array<string>): Array<string> | string => {
	if ($ == []) return 'Gym is empty';
	return $.map(element => element.replace(/O/g, ' '));
};
