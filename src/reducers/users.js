import { RECEIVE_USERS } from '../actions/users'
import { HANDLE_ADD_ANSWER, HANDLE_ADD_QUESTION } from '../actions/questions';

export default function users (state = {}, action) {
	switch(action.type) {
		case RECEIVE_USERS:
		  return {
		    ...state,
		    ...action.users
		  }
		case HANDLE_ADD_ANSWER:
			const { answer, qid, authedUser } = action.info
			const user = state[authedUser]
			return {
				...state,
				[authedUser]: {
					...user,
					answers: {
						...user.answers,
						[qid]: answer
					}
				}
			}
		case HANDLE_ADD_QUESTION:
			const author = state[action.info.author]
			return {
				...state,
				[author.id]: {
					...author,
					questions: author.questions.concat([action.info.id])
				}
			}
		default :
		  return state
	}
}