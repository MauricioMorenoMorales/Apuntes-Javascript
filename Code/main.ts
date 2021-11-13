/*
1 (2) => 2
2 (2 + 4) => 6
3 (2 + 4 + 6) => 12
4 (2 + 4 + 6 + 8) => 20
5 (2 + 4 + 6 + 8 + 10) => 30
6 (2 + 4 + 6 + 8 + 10 + 12) => 42

*/
const testing = (value: number): number => value * (value + 1);

console.log(
	testing(1),
	testing(2),
	testing(3),
	testing(4),
	testing(5),
	testing(6),
);

/*
2 (1 + 2) => 3
3 (1 + 2 + 3) => 6
4 (1 + 2 + 3 + 4) => 10
5 (1 + 2 + 3 + 4 + 5) => 15
6 (1 + 2 + 3 + 4 + 5 + 6) => 21
*/
