'use strict';
const password = parameter =>
	parameter.length >= 8 &&
	/[a-z]/.test(parameter) &&
	/[A-Z]/.test(parameter) &&
	/\d/.test(parameter);
