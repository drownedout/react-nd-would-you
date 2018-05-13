import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuestionItem from './QuestionItem';

const style = {
	ul: {
		listStyle: 'none',
		padding: '0 1rem'
	},
	li: {
		margin: '2rem 0'
	}
}

class QuestionList extends Component {
	render(){
		return (
			<ul style={style.ul}>
	          {this.props.questionIds.map((id) => (
	            <li key={id} style={style.li}>
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