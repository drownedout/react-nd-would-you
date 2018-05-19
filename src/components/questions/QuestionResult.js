import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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

class QuestionResult extends Component {
	render(){
		const { option, color, count } = this.props;
		return (
			<Grid item xs={12} sm={6}>
		        <CardContent>
			        <Typography gutterBottom variant="headline" component="h2">
				        {option.text}
			        </Typography>
			        <CardActions>
				        <Button style={styles.button} color={color}>{count} Vote</Button>
			        </CardActions>
		        </CardContent>
	   </Grid>
		)
	}
}

export default connect()(QuestionResult);