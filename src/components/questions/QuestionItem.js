import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { handleAnswerQuestion } from '../../actions/questions';

const styles = {
  card: {
    minWidth: 275,
    padding: '2rem 4rem',
    textAlign: 'center'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  link: {
  	textDecoration: 'none'
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  button: {
  	margin: '0 auto'
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
		const { id, question, user, classes } = this.props
		const { author, optionOne, optionTwo } = question
		return (
			<div>
				<Card className={classes.card}>
					<Link to={`/questions/${id}`} style={styles.link}>
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
				    </Link>
				    <Avatar alt={user.name} src={user.avatarURL} className={classes.avatar} />
				    <Typography className={classes.title} color="textSecondary">
				        Submitted By: {author}
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

  return {
    question: question,
    user: user,
    authedUser
  }
}

export default connect(mapStateToProps)(withStyles(styles)(QuestionItem));