import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';

const styles = {
  userListItem: {
    width: '80%',
    border: '1px solid #eee',
  },
};


class User extends Component {
	render(){
		const { classes, user } = this.props;
		return (
			<ListItem dense button className={classes.listItem} styles={styles.userListItem}>
	          <Avatar alt={user.name} src={user.avatarURL} />
	          <ListItemText primary={user.name} />
	        </ListItem>
        )
	}
}

function mapStateToProps({ users }, { id }){
	const user = users[id]
	return {
		user
	}
}
export default connect(mapStateToProps)(withStyles(styles)(User));