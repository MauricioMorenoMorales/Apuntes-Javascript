const sumMix = x => {
	let response = 0
	for (let i of x) response += parseInt(i)
	return response
}

const sumMixClever = x => x.map(a => +a).reduce((a, b) => a + b)

console.log(sumMixClever(['5', '0', 9, 3, 2, 1, '9']))

let numero = 9
console.log(typeof numero)
