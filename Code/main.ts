const checkCoupon = function (
	enteredCode: string,
	correctCode: string,
	currentDate: string,
	expirationDate: string,
): boolean | any {
	console.log(enteredCode, correctCode, currentDate, expirationDate);
	if (enteredCode !== correctCode) return false;
	const [currentMonthDate, currentYear] = currentDate.split(',');
	const [expirationMonthDate, expirationYear] = expirationDate.split(',');
	if (Number(currentYear) > Number(expirationYear)) {
		return false;
	}
	const monthValue: any = {
		January: 0,
		February: 31,
		March: 60,
		April: 91,
		May: 121,
		June: 152,
		July: 182,
		August: 213,
		September: 243,
		October: 273,
		November: 304,
		December: 334,
	};
	const [currentMonth, currentDay] = currentMonthDate.split(' '),
		[expirationMonth, expirationDay] = currentMonthDate.split(' ');

	console.log(Number(currentDay), Number(expirationDay));

	return (
		monthValue[currentMonth] + Number(currentDay) <=
		monthValue[expirationMonth] + Number(expirationDay)
	);
};

console.log(
	checkCoupon('123', '123', 'September 5, 2015', 'October 1, 2014'),
	checkCoupon('123', '123', 'September 5, 2014', 'October 1, 2014'),
	checkCoupon('123a', '123', 'September 5, 2014', 'October 1, 2014'),
);
//https://www.codewars.com/kata/539de388a540db7fec000642/solutions
