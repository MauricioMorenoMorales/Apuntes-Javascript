const repeatIt = function (str: any, num: number): string {
	if (typeof str != 'string') return 'Not a string';
	let response = '';
	for (let i = 0; i < num; i++) {
		response = response + str;
	}
	return response;
};
