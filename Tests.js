const well = x => {
	const counter = x.filter(e => e === 'good')
	if (counter.length >= 3) {
		return 'I semll a series'
	} else if (counter.length >= 1) {
		return 'Publish!'
	} else {
		return 'Fail!'
	}
}

console.log(well(['good', 'bad', 'bad', 'bad', 'bad']))
