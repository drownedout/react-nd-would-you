import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Avatar from '@material-ui/core/Avatar';
import Drawer from '@material-ui/core/Drawer';
import SideNav from './SideNav'

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  navlink: {
    textDecoration: 'none',
    color: '#fff'
  },
  authContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  avatar: {
    display: 'inline-block',
  },
  userName: {
    display: 'inline-block',
    color: '#fff',
    marginLeft: 10
  }
};

class Nav extends Component {
  state = {
    left: false
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render(){
    const { classes, authedUser, currentUser } = this.props;
    let authButton;
    if(authedUser){
      authButton = (
        <div style={styles.authContainer}>
          <Avatar alt={currentUser.name} src={currentUser.avatarURL} style={styles.avatar}/>
          <Typography style={styles.userName}>{currentUser.name}</Typography>
        </div>
      )
    } else {
      authButton = <Button color="inherit">Login</Button>
    }

    return (
      <div className={classes.root}>
        <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
            <SideNav />
          </div>
        </Drawer>
        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon onClick={this.toggleDrawer('left', true)}/>
            </IconButton>
            <Typography variant="title" color="inherit" className={classes.flex}>
            </Typography>
            {authButton}
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

Nav.propTypes = {
  classes: PropTypes.object.isRequired,
};

function mapStateToProps ({ authedUser, users }) {
  const currentUser = users[authedUser]
  return {
    authedUser,
    currentUser
  }
}

export default connect(mapStateToProps)(withStyles(styles)(Nav));