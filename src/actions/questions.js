import {
  _saveQuestion,
  _saveQuestionAnswer,
} from '../utils/_DATA'

export const RECEIVE_QUESTIONS= 'RECEIVE_QUESTIONS'
export const HANDLE_ADD_QUESTION = 'HANDLE_ADD_QUESTION'
export const HANDLE_ADD_ANSWER = 'HANDLE_ADD_ANSWER'

function saveQuestionAnswer(answer){
  return {
	  	type: HANDLE_ADD_ANSWER,
		answer
	}
}

export function handleAnswerQuestion(answer){
	return (dispatch) => {
		_saveQuestionAnswer(answer).then(() => {
			dispatch(saveQuestionAnswer(answer))
		})
	}
}

function saveQuestion(question){
	return {
		type: HANDLE_ADD_QUESTION,
		question
	}
}

export function handleSaveQuestion(question){
	return (dispatch) => {
		_saveQuestion(question).then((res)=> {
			dispatch(saveQuestion(res))
		})
	}
}

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}