const initializeNames = (name: string, nameArray = name.split(' ')): string =>
	nameArray.length > 2
		? `${nameArray[0]} ${nameArray
				.slice(1, -1)
				.map(element => `${element[0].toUpperCase()}. `)
				.join('')} ${nameArray[nameArray.length - 1]}`
		: name;
