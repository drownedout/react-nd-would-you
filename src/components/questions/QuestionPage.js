import React, { Component } from 'react';
import  { connect } from 'react-redux';
import QuestionItem from './QuestionItem';

class QuestionPage extends Component {
	render(){
		const {id} = this.props;
		return (
			<QuestionItem id={id}/>
		)
	}
}


function mapStateToProps({ questions }, props) {
	const { id } = props.match.params

	return {
		id
	}
}

export default connect(mapStateToProps)(QuestionPage);