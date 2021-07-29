const isInvalid = (count, peopleCount) => {
	return (
		count > peopleCount || Math.floor(count) !== count || count < 0 || !count
	);
};

function createTeams({ members, teamsCount, teamsNames, allowOdd }) {
	console.log(arguments);
	members = members.map(i => i.trim()).filter(Boolean);
	const membersCopy = [...members];
	const membersCount = members.length;

	if (isInvalid(teamsCount, membersCount))
		throw new Error('Something went wrong');

	const teams = [];

	for (let i = 0; i < teamsCount; i++) {
		teams[i] = { name: null, members: [] };
	}

	let teamIndex = 0;
	const stopIndex = allowOdd
		? null
		: membersCount - (membersCount % teamsCount);

	members.forEach((_, index) => {
		if (index === stopIndex) return;
		const randomNum = Math.floor(Math.random() * membersCopy.length);

		const teamName = teamsNames[teamIndex] || 'Team' + (teamIndex + 1);
		teams[teamIndex].name = teamName;
		teams[teamIndex].members.push(membersCopy[randomNum]);
		membersCopy.splice(randomNum, 1);
		teamIndex = (teamIndex + 1) % teamsCount;
	});

	return [teams, [...membersCopy]];
}

export default createTeams;
