import React from "react";
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  card: {
    minWidth: 275,
    padding: '2rem 4rem',
    textAlign: 'center'
  },
  button: {
  	margin: '0 auto',
  	display: 'block'
  },
};

function MissingPage({classes, history}){
	return (
		<div>
			<Card className={classes.card}>
			<CardHeader title="Oh noooooo! Page Not Found!"/> 
				<Grid container spacing={24}>
			        <CardContent>
				        <CardActions>
					       <Button 
					        	style={styles.button} 
					        	size="large" 
					        	onClick={() => history.push("/")} 
					        	variant="raised" 
					        	color="primary">
					        	To Safety!
					        </Button>
				        </CardActions>
			        </CardContent>
			    </Grid>
			</Card>
		</div>	
	)		    
}

export default withStyles(styles)(MissingPage)