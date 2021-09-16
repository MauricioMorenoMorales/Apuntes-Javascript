'use strict';
const histogram = results =>
	`6|${'#'.repeat(results[5])} ${results[5] || ''}
5|${'#'.repeat(results[4])} ${results[4] || ''}
4|${'#'.repeat(results[3])} ${results[3] || ''}
3|${'#'.repeat(results[2])} ${results[2] || ''}
2|${'#'.repeat(results[1])} ${results[1] || ''}
1|${'#'.repeat(results[0])} ${results[0] || ''}
`;
console.log(histogram([7, 3, 10, 1, 0, 5]));
