import {
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer,
} from "../utils/_DATA"

export const RECEIVE_QUESTIONS= 'RECEIVE_QUESTIONS'
export const HANDLE_ADD_QUESTION = 'HANDLE_ADD_QUESTION'
export const HANDLE_ADD_ANSWER = 'HANDLE_ADD_ANSWER'

function saveQuestionAnswer(info){
  return {
	  	type: HANDLE_ADD_ANSWER,
		info
	}
}

export function handleAnswerQuestion(info){
	return (dispatch) => {
		_saveQuestionAnswer(info).then(() => {
			dispatch(saveQuestionAnswer(info))
		})
	}
}

function saveQuestion(info){
	return {
		type: HANDLE_ADD_QUESTION,
		info
	}
}

export function handleSaveQuestion(info){
	return (dispatch) => {
		_saveQuestion(info).then((res)=> {
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