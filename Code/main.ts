const defineSuit = function (card: string): string {
	if (/♣/i.test(card)) return 'clubs'
	if (/♠/i.test(card)) return 'spades'
	if (/♦/i.test(card)) return 'diamonds'
	if (/♥/i.test(card)) return 'hearts'
	return 'Not defined'
}
