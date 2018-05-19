import {
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer,
  _deleteQuestion
} from "../utils/_DATA"

export const RECEIVE_QUESTIONS= 'RECEIVE_QUESTIONS'
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

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}