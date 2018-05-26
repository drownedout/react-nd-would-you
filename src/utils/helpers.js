export const calculatePercentage = (question, option) => {
	const { optionOne, optionTwo } = question;
	const optionOneTotal = optionOne.votes.length;
	const optionTwoTotal = optionTwo.votes.length;

	const totalVotes = optionOneTotal + optionTwoTotal;
	if (totalVotes === 0) {
		return 0
	}

	return Math.round(question[option].votes.length / totalVotes * 100)
}