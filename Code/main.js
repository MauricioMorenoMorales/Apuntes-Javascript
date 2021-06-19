'use strict';
const bump = input =>
	input.replace(/_/g, '').length < 15 ? 'Woohoo!' : 'Card Dead.';
