import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import CardActions from '@material-ui/core/CardActions';
import { handleSaveQuestion } from '../../actions/questions';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  cardAction: {
    padding: '40px 0'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 600,
  },
  card: {
    minWidth: 275,
    padding: '2rem 4rem',
    textAlign: 'center',
    marginTop: '2rem'
  },
});

class QuestionNew extends Component {

	state = {
		optionOne: '',
		optionTwo: ''
	}

	handleChange = e => {
	    const { name, value } = e.target
	    this.setState(() => ({
	      [name]: value
	    }))
	 }

	handleSubmit = e => {
		e.preventDefault()

		const {dispatch, authedUser} = this.props

		dispatch(handleSaveQuestion({
			author: this.props.authedUser,
			optionOneText: this.state.optionOne,
			optionTwoText: this.state.optionTwo
		}))

		this.props.history.push("/")
	}

	render(){
		const { classes } = this.props;

		return (
			<Grid item xs={8} style={{margin: '0 auto'}}>
				<Card className={classes.card}>
						<Grid container spacing={24}>
							<form 
								className={classes.container}  
								autoComplete="off" 
								onSubmit={this.handleSubmit}
							>
								<Typography
				                  color="primary"
				                  variant="display1"
				                >
				                Would you rather?
				                </Typography>
								<TextField
								  id="name"
								  name="optionOne"
								  label="Option One"
								  className={classes.textField}
								  margin="normal"
								  onChange={this.handleChange}
								  value={this.state.optionOne}
								/>
								<TextField
								  id="name"
								  name="optionTwo"
								  label="Option Two"
								  className={classes.textField}
								  margin="normal"
								  onChange={this.handleChange}
								  value={this.state.optionTwo}
								/>
								<Divider />
								<CardActions className={classes.cardAction}>
									<Button 
										size="large" 
										variant="raised" 
										color="secondary" 
										aria-label="add" 
										type="submit"
										className={classes.button}>
							          Add Question
							        </Button>
						        </CardActions>
							</form>
					    </Grid>
			    </Card>
			</Grid>

		)
	}
}

function mapStateToProps({ authedUser }){
	return {
		authedUser
	}
}

export default connect(mapStateToProps)(withStyles(styles)(QuestionNew));