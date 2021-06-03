type MeetingUserData = {
	firstName: string;
	lastName: string;
	country: string;
	continent: string;
	age: number;
	language: string;
	githubAdmin: string;
};

const isSameLanguage = (
	listOfMembers: Array<MeetingUserData>,
	language: string,
): Array<MeetingUserData> =>
	listOfMembers.filter(
		member => member.language === language && member.githubAdmin === 'yes',
	);
