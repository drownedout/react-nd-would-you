import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  paper: {
  	width: '90%',
  	margin: '1rem auto',
  	padding: '1rem'
  },
  table: {
    minWidth: 700,
  },
});


class Leaderboard extends Component {
  render(){
  	const { users, totalScore, classes } = this.props
    return (
        <Grid className={classes.root} container>
        	<Paper className={classes.paper}>
        		<Table className={classes.table}>
        			<TableHead>
        				<TableRow>
        					<TableCell>Rank</TableCell>
                  <TableCell>Picture</TableCell>
        					<TableCell>Name</TableCell>
        					<TableCell>Asked</TableCell>
        					<TableCell>Answered</TableCell>
        					<TableCell>Total Score</TableCell>
        				</TableRow>
        			</TableHead>
        			<TableBody>
        				{users.map((user, rank) => (
        					<TableRow key={user.id}>
		        				<TableCell>{rank+1}</TableCell>
                    <TableCell><Avatar alt={user.name} src={user.avatarURL} className={classes.avatar} /></TableCell>
		        				<TableCell>{user.name}</TableCell>
		        				<TableCell>{user.questions.length}</TableCell>
		        				<TableCell>{Object.keys(user.answers).length}</TableCell>
		        				<TableCell>{totalScore(user)}</TableCell>
	        				</TableRow>
        				))}
        			</TableBody>
        		</Table>
        	</Paper>
        </Grid>
    )
  }
}

function mapStateToProps( { users }){
	const totalScore = user => 
	Object.keys(user.answers).length + user.questions.length;

	return {
		users: Object.values(users).sort((a,b) => totalScore(b) - totalScore(a)),
		totalScore
	}
}

export default connect(mapStateToProps)(withStyles(styles)(Leaderboard));