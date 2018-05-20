import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleInitialData } from './actions/shared';
import LoadingBar from 'react-redux-loading'
import './App.css';
import Nav from './components/navigation/Nav'
import QuestionList from './components/questions/QuestionList';
import QuestionPage from './components/questions/QuestionPage';
import Leaderboard from './components/leaderboard/Leaderboard';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    const { loading } = this.props;
    return (
      <Router>
        <div>
          <Nav />
          <LoadingBar />
          <h1 className="App-title">Would You Rather?</h1>
          {loading === true
            ? null
            : <div>
                <Route path ='/' exact component={QuestionList}/>
                <Route path='/leaderboard' component={Leaderboard} />
                <Route path='/questions/:id' component={QuestionPage} />
              </div>
          }
        </div>
      </Router>
    );
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App)
