import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuestionItem from './QuestionItem';
import { Paper, Tabs, Tab } from '@material-ui/core'
import { filterQuestions } from '../../utils/helpers'
import { QuestionFilter, toggleFilter } from '../../actions/filters'

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

	handleFilter = (event, value) => {
		const { dispatch } = this.props
		if(value === 0){
			dispatch(toggleFilter(QuestionFilter.UNANSWERED))
		} else if (value === 1) {
			dispatch(toggleFilter(QuestionFilter.ANSWERED))
		} else {
			dispatch(toggleFilter("ALL"))
		}
	}

	render(){
		const { questionIds, filters } = this.props

		return (
			<div>
				<Paper>
					<Tabs
						centered
						value={
								filters === QuestionFilter.UNANSWERED ? 0 
								:filters === QuestionFilter.ANSWERED ? 1
								: 2}
						onChange={this.handleFilter}
					>
						<Tab label="Unanswered" value={0}/>
						<Tab label="Answered" value={1}/>
						<Tab label="All" value={2}/>
					</Tabs>
				</Paper>
				<ul style={style.ul}>
		          {questionIds.map((id) => (
		            <li key={id} style={style.li}>
		              <QuestionItem id={id}/>
		            </li>
		          ))}
		        </ul>
	        </div>
        )
	}
}

function mapStateToProps({ authedUser, questions, filters }){

	let questionIds = filterQuestions(authedUser, questions, filters)

	return {
		questionIds,
		filters,
	}
}

export default connect(mapStateToProps)(QuestionList);