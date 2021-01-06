const devolverLetras = (n: number): string => {
	if (n < 16 && n % 10 !== 0) {
		return [
			'cero',
			'uno',
			'dos',
			'tres',
			'cuatro',
			'cinco',
			'seis',
			'siete',
			'ocho',
			'nueve',
			'diez',
			'once',
			'doce',
			'trece',
			'catorce',
			'quince',
		][n]
	} else if (n % 10 === 0) {
		return [
			'cero',
			'diez',
			'veinte',
			'treinta',
			'cuarenta',
			'cincuenta',
			'sesenta',
			'setenta',
			'ochenta',
			'noventa',
		][n / 10]
	} else {
		let numeroDividido = String(n).split('')
		let decenas = [
			'',
			'dieci',
			'venti y ',
			'treinta y ',
			'cuarenta y ',
			'cincuenta',
			'sesentai y',
			'setenta y',
			'ochenta y',
			'noventa y',
		][numeroDividido[0]]
		const unidades = [
			' cero',
			' uno',
			' dos',
			' tres',
			' cuatro',
			' cinco',
			' seis',
			' siete',
			' ocho',
			' nueve',
		][numeroDividido[1]]
		return decenas + unidades
	}
}

console.log(devolverLetras(23))
console.log(devolverLetras(10))
console.log(devolverLetras(0))
console.log(devolverLetras(97))
console.log(devolverLetras(77))
console.log(devolverLetras(60))
console.log(devolverLetras(7))

const devolverLetrasOptimizado = (n: number): string => {
	let numeroDividido = String(n)
		.split('')
		.map(e => Number(e))
	let unidadesresponse = ''
	let decenasresponse = ''
	let centenasresponse = ''
	let milesimasresponse = ''
	const milesimas = [
		'cero ',
		'mil ',
		'dosmil ',
		'tresmil ',
		'cuatromil ',
		'cincomil ',
		'seismil ',
		'sietemil ',
		'ochomil ',
		'nuevemil ',
	]
	const centenas = [
		'cero ',
		'ciento ',
		'doscientos ',
		'trescientos ',
		'cuatroscientos ',
		'quinientos ',
		'seiscientos ',
		'setesientos ',
		'ochosientos ',
		'novescientos ',
	]
	const decenas = [
		'',
		'dieci',
		'venti y ',
		'treinta y ',
		'cuarenta y ',
		'cincuenta ',
		'sesentai y ',
		'setenta y ',
		'ochenta y ',
		'noventa y ',
	]
	const unidades = [
		'cero',
		'uno',
		'dos',
		'tres',
		'cuatro',
		'cinco',
		'seis',
		'siete',
		'ocho',
		'nueve',
		'diez',
		'once',
		'doce',
		'trece',
		'catorce',
		'quince',
	]
	console.log(numeroDividido)
	if (numeroDividido.length === 4) {
		unidadesresponse = unidades[numeroDividido[3]]
		decenasresponse = decenas[numeroDividido[2]]
		centenasresponse = centenas[numeroDividido[1]]
		milesimasresponse = milesimas[numeroDividido[0]]
	} else if (numeroDividido.length === 3) {
		unidadesresponse = unidades[numeroDividido[2]]
		decenasresponse = decenas[numeroDividido[1]]
		centenasresponse = centenas[numeroDividido[0]]
	} else if (numeroDividido.length === 2 && n > 15) {
		unidadesresponse = unidades[numeroDividido[1]]
		decenasresponse = decenas[numeroDividido[0]]
	} else if (n > -1 && n < 16) {
		unidadesresponse = unidades[n]
	}
	return `${milesimasresponse}${centenasresponse}${decenasresponse}${unidadesresponse}`
}

console.log(devolverLetrasOptimizado(1987))
console.log(devolverLetrasOptimizado(8760))
console.log(devolverLetrasOptimizado(28))
console.log(devolverLetrasOptimizado(784))
console.log(devolverLetrasOptimizado(15))
