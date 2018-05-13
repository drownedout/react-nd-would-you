import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuestionItem from './QuestionItem';

class QuestionList extends Component {
	render(){
		return (
			<ul>
	          {this.props.questionIds.map((id) => (
	            <li key={id}>
	              <QuestionItem id={id}/>
	            </li>
	          ))}
	        </ul>
        )
	}
}

function mapStateToProps({ questions }){
	return {
		questionIds: Object.keys(questions)
	}
}

export default connect(mapStateToProps)(QuestionList);