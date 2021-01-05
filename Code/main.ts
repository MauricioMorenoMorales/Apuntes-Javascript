const beer = () => {
	let response = []
	for (let i = 99; i > 1; i--) {
		if (i === 2) {
			response.push(`
2 botellas de cerveza en la pared, 2 botellas de cerveza.
Toma uno abajo, pasa a tu alrededor, 1 botella de cerveza en la pared...
1 botella de cerveza en la pared,  botellas de cerveza.
No más botellas de cerveza en la pared, no más botellas de cerveza.
Los hemos bajado y los hemos pasado; Ahora estamos borrachos y nos desmayamos!
			`)
		} else {
			response.push(`
${i} botellas de cerveza en la pared, ${i} botellas de cerveza.
Toma uno abajo, pasa a tu alrededor, ${
				i - 1
			} botellas de cerveza en la pared...`)
		}
	}
	return response.join('\n')
}

console.log(beer())
