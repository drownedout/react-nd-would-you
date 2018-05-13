import React, { Component } from 'react';
import { connect } from 'react-redux';

class QuestionItem extends Component {
	render(){
		const { question } = this.props
		const { author, id, optionOne, optionTwo } = question
		return (
			<div>
				<p>{question.author}</p>
				<p>{question.optionOne.text}</p>
				<p>{question.optionTwo.text}</p>
			</div>
        )
	}
}

function mapStateToProps ({questions}, { id }) {
  const question = questions[id]
  return {
    question: question
  }
}

export default connect(mapStateToProps)(QuestionItem);