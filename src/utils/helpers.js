import { QuestionFilter } from "../actions/filters";

export function formatDate (timestamp) {
  const d = new Date(timestamp)
  const time = d.toLocaleTimeString('en-US')
  return time.substr(0, 5) + time.slice(-2) + ' | ' + d.toLocaleDateString()
}

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
			)).sort((a,b) => questions[b].timestamp - questions[a].timestamp)
		)
	}
	else if (filter === QuestionFilter.UNANSWERED){
		return (
			Object.keys(questions).filter(qid => (
				!questions[qid].optionOne.votes.includes(authedUser) &&
				!questions[qid].optionTwo.votes.includes(authedUser)
			)).sort((a,b) => questions[b].timestamp - questions[a].timestamp)
		)
	}
	else {
		return (
			Object.keys(questions).sort((a,b) => questions[b].timestamp - questions[a].timestamp)
		)
	}
}