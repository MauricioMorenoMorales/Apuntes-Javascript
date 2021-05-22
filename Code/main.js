'use strict'
const uefaEuro2016 = function (teams, scores) {
	let winner = ''
	if (scores[0] > scores[1]) winner = `${teams[0]} won!`
	else if (scores[0] < scores[1]) winner = `${teams[1]} won!`
	else if (scores[0] == scores[1]) winner = 'teams played draw.'
	return `At match ${teams[0]} - ${teams[1]}, ${winner}`
}
