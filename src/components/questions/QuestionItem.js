import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from "react-router-dom"
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { handleAnswerQuestion } from '../../actions/questions';
import { calculatePercentage, formatDate } from '../../utils/helpers';

const styles = {
  card: {
    minWidth: 275,
    padding: '2rem 4rem',
    textAlign: 'center'
  },
  link: {
  	textDecoration: 'none'
  },
  title: {
    marginBottom: 5,
    fontSize: 14,
  },
  subtitle: {
  	fontSize: 10,
  	marginBottom: 15
  },
  button: {
  	margin: '0 auto',
  	display: 'block'
  },
  voteText: {
  	display: 'block',
  	textAlign: 'center',
  	margin: '1rem auto'
  },
  avatar: {
  	display: 'inline-block',
  	margin: '.5rem 0'
  }
};

class QuestionItem extends Component {

	handleAnswerSubmit = (e, value) => {
		e.preventDefault()

		const { dispatch, question, authedUser } = this.props;
		const { id } = question;
		
		console.log(value)
		dispatch(handleAnswerQuestion({
			qid: id,
			authedUser: authedUser,
			answer: value
		}))
	}

	render(){
		const { id, question, user, classes, isAnswered, authedUser, isLoading } = this.props
		const { author, optionOne, optionTwo, timestamp } = question

		const selectedOptionStyle = {
			optionOneHighlight: {
			  borderBottom: `${optionOne.votes.includes(authedUser) ? "5px solid #3f51b5" : "none"}`,
			},
			optionTwoHighlight: {
			  borderBottom: `${optionTwo.votes.includes(authedUser) ? "5px solid #f50057" : "none"}`,
			},
		}

		if (!isLoading && !question) {
	      return <Redirect to="/404" />
	    }

		return (
			<div>
				<Card className={classes.card}>
					<CardHeader title="Would You Rather?"/> 
					<Typography>
				    	{optionOne.votes.length + optionTwo.votes.length} total votes
				    </Typography>
					<Link to={`/questions/${id}`} style={styles.link}>
							{isAnswered && (
								<Grid container spacing={24}>
									<Grid item xs={12} sm={6}>
								        <CardContent>
									        <Typography gutterBottom variant="headline" component="h2">
										        {optionOne.text}
									        </Typography>
									        <CardActions style={selectedOptionStyle.optionOneHighlight}>
										        <Typography
										        	style={styles.button}
										        	color="primary">
										        	{calculatePercentage(question, "optionOne")}%
										        </Typography>
										        <Typography style={styles.voteText}>
										        	{optionOne.votes.length} total votes
										        </Typography>
									        </CardActions>
								        </CardContent>
								    </Grid>
								    <Grid item xs={12} sm={6}>
								        <CardContent>
									        <Typography gutterBottom variant="headline" component="h2">
										        {optionTwo.text}
									        </Typography>
									        <CardActions style={selectedOptionStyle.optionTwoHighlight}>
										        <Typography 
										        	style={styles.button}
										        	color="secondary">
										        	{calculatePercentage(question, "optionTwo")}%
										        </Typography>
										        <Typography style={styles.voteText}>
										        	{optionTwo.votes.length} total votes
										        </Typography>
									        </CardActions>
								        </CardContent>
								    </Grid>
							    </Grid>
							)}
							{!isAnswered && (
								<Grid container spacing={24}>
									<Grid item xs={12} sm={6}>
								        <CardContent>
									        <Typography gutterBottom variant="headline" component="h2">
										        {optionOne.text}
									        </Typography>
									        <CardActions>
										        <Button 
										        	style={styles.button} 
										        	size="small" 
										        	onClick={(e) => this.handleAnswerSubmit(e, "optionOne")} 
										        	variant="raised" 
										        	color="primary">
										        	Vote
										        </Button>
									        </CardActions>
								        </CardContent>
								    </Grid>
								    <Grid item xs={12} sm={6}>
								        <CardContent>
									        <Typography gutterBottom variant="headline" component="h2">
										        {optionTwo.text}
									        </Typography>
									        <CardActions>
										        <Button 
										        	style={styles.button} 
										        	onClick={(e) => this.handleAnswerSubmit(e, "optionTwo")} 
										        	size="small" 
										        	variant="raised" 
										        	color="secondary">
										        	Vote
										        </Button>
									        </CardActions>
								        </CardContent>
								    </Grid>
							    </Grid>
					        )}
				    </Link>
				    <Avatar alt={user.name} src={user.avatarURL} className={classes.avatar} />
				    <Typography className={classes.title} color="textSecondary">
				        Submitted By: {author}
			        </Typography>
			        <Typography className={classes.subtitle} color="textSecondary" variant="subheading">
				        {formatDate(timestamp)}
			        </Typography>
			    </Card>
			</div>
        )
	}
}

QuestionItem.propTypes = {
  classes: PropTypes.object.isRequired,
};

function mapStateToProps ({questions, users, authedUser}, { id }) {
  const question = questions[id]
  const user = users[question.author]
  let isAnswered

  if (question){
  	const {optionOne, optionTwo} = question;
  	isAnswered = optionOne.votes.includes(authedUser) ||
  				 	   optionTwo.votes.includes(authedUser)
  }

  return {
    question: question,
    user: user,
    authedUser,
    isAnswered,
  }
}

export default connect(mapStateToProps)(withStyles(styles)(QuestionItem));