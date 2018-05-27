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
import { NAV_STATE, toggleSideNav } from "../../actions/navigation"

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

  handleNavToggle = () => {
    const { dispatch } = this.props
      dispatch(toggleSideNav())
  }
  
  render(){
    const { classes, authedUser, currentUser, navOpen } = this.props;
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
        <Drawer anchor="left" open={navOpen} onClose={this.handleNavToggle}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.handleNavToggle}
            onKeyDown={this.handleNavToggle}
          >
            <SideNav />
          </div>
        </Drawer>
        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon onClick={this.handleNavToggle}/>
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

function mapStateToProps ({ authedUser, users, navigation }) {
  const currentUser = users[authedUser]
  return {
    authedUser,
    currentUser,
    navOpen: navigation === NAV_STATE.OPEN
  }
}

export default connect(mapStateToProps)(withStyles(styles)(Nav));