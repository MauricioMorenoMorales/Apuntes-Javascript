type MeetingUserData = {
	firstName: string;
	lastName: string;
	country: string;
	continent: string;
	age: number;
	language: string;
	githubAdmin: string;
	meal: string;
};

const orderFood = (userList: Array<MeetingUserData>): { key: string } => {
	let response: any = {};
	for (const user of userList) {
		response[user.meal] ? response[user.meal]++ : (response[user.meal] = 1);
	}
	return response;
};
