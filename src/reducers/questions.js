import { RECEIVE_QUESTIONS, HANDLE_ADD_ANSWER } from '../actions/questions';

export default function questions(state={}, action){
	switch(action.type){
		case RECEIVE_QUESTIONS:
			return {
				...state,
				...action.questions
			}
		case HANDLE_ADD_ANSWER:
			const { answer, qid, authedUser } = action.info
			const question = state[qid]
			return {
				...state,
				[qid]: {
					...question,
					[answer]: {
						...question[answer],
						votes: [...question[answer].votes, authedUser]
					}
				}
			}
		default:
			return state
	}
}