const isValidWalk = (
	walk: Array<string>,
	north = walk.filter(item => item === 'n').length,
	south = walk.filter(item => item === 's').length,
	east = walk.filter(item => item === 'e').length,
	west = walk.filter(item => item === 'w').length,
): boolean => walk.length === 10 && north === south && east === west;
