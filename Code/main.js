'use strict';
const isSameLanguage = (listOfMembers, language) =>
	listOfMembers.filter(
		member => member.language === language && member.githubAdmin === 'yes',
	);
