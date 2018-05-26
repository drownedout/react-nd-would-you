import React, { Component } from 'react';
import { connect } from 'react-redux';
import User from '../users/User';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import { setAuthedUser } from '../../actions/auth';

const styles = {
  root: {
    width: '80%',
    margin: '1rem auto',
    textAlign: 'center',
    maxWidth: 360,
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 4rem',
  },
};

class AuthenticationList extends Component {

	handleLogin = (id) => {
		const { dispatch } = this.props;
		dispatch(setAuthedUser(id))
	}

	render(){
		const { classes, users } = this.props;
		return (
			<div className={classes.root} styles={styles.root}>
				<List>
		          {this.props.userIds.map((id) => (
		          	  <div 
		          	  	key={id}
		          	  	onClick ={() => this.handleLogin(id)}
		          	  	>
			              <User id={id}/>
			              <Divider />
		              </div>
		          ))}
		        </List>
	        </div>
        )
	}
}

function mapStateToProps({ users }){
	return {
		userIds: Object.keys(users)
	}
}

export default connect(mapStateToProps)(withStyles(styles)(AuthenticationList));