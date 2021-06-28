const hasUniqueChars = (parameter: string): boolean => {
	console.log(parameter);
	return parameter.replace(/[a-z]/g, '').length > 0;
};
