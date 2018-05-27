import { QuestionFilter } from "../actions/filters";

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

export const filterQuestions = (authedUser, questions, filter) => {
	if (filter === QuestionFilter.ANSWERED){
		return (
			Object.keys(questions).filter(qid => (
				questions[qid].optionOne.votes.includes(authedUser) ||
				questions[qid].optionTwo.votes.includes(authedUser)
			))
		)
	}
	else if (filter === QuestionFilter.UNANSWERED){
		return (
			Object.keys(questions).filter(qid => (
				!questions[qid].optionOne.votes.includes(authedUser) &&
				!questions[qid].optionTwo.votes.includes(authedUser)
			))
		)
	}
	else {
		return (
			Object.keys(questions)
		)
	}
}