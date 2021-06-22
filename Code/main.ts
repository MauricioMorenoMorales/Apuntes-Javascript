const bump = (input: string): string =>
	input.replace(/_/g, '').length < 15 ? 'Woohoo!' : 'Card Dead.';