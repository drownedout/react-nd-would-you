import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import ListItemText from '@material-ui/core/ListItemText';
import { Home, ExitToApp, Add, Compare } from '@material-ui/icons/';
import { unsetAuthedUser } from '../../actions/auth';

const styles = {
  navTitle: {
    textAlign: 'left',
    marginLeft: 25
  },
  navLink: {
    color: '#fff',
    textDecoration: 'none'
  }
}

class SideNav extends Component{
    handleLogout = () => {
      const { dispatch } = this.props
      dispatch(unsetAuthedUser())
      this.props.history.push("/")
    }
    render(){
      return (
        <div>
          <h2 style={styles.navTitle}>Menu</h2>
          <List>
            <NavLink to="/" exact style={styles.navLink}>
              <ListItem button>
                <Avatar>
                  <Home />
                </Avatar>
                <ListItemText primary="Home" />
              </ListItem>
            </NavLink>
            <Divider />
            <NavLink to="/leaderboard" exact style={styles.navLink}>
              <ListItem button>
                <Avatar>
                  <Compare />
                </Avatar>
                <ListItemText primary="Leaderboard" />
              </ListItem>
            </NavLink>
            <Divider />
            <NavLink to="/add" exact style={styles.navLink}>
              <ListItem button>
                <Avatar>
                  <Add />
                </Avatar>
                <ListItemText primary="Add New Question" />
              </ListItem>
            </NavLink>
            <Divider />
            <ListItem onClick = {() => this.handleLogout()} button>
              <Avatar>
                <ExitToApp />
              </Avatar>
              <ListItemText primary="Logout"/>
            </ListItem>
          </List>
        </div>
      )
    }
}

export default connect()(SideNav);