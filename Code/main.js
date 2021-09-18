'use strict';
const orderWord = parameter =>
	!parameter ? 'Invalid String' : [...parameter].sort().join('');
