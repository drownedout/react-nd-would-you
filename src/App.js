import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { handleInitialData } from './actions/shared';
import LoadingBar from 'react-redux-loading'
import './App.css';
import Nav from './components/navigation/Nav'
import QuestionList from './components/questions/QuestionList';
import QuestionPage from './components/questions/QuestionPage';
import QuestionNew from './components/questions/QuestionNew';
import Leaderboard from './components/leaderboard/Leaderboard';
import AuthenticationList from './components/authentication/AuthenticationList';
import MissingPage from './components/404/MissingPage'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    const { loading, isAuthenticated } = this.props;
    return (
      <Router>
        <div>
          <Nav />
          <LoadingBar />
          {loading === true
            ? null
            : <div>
                {isAuthenticated === true
                  ? <Switch>
                      <Route path='/' exact component={QuestionList}/>
                      <Route path='/leaderboard' exact component={Leaderboard} />
                      <Route path='/questions/:id' exact component={QuestionPage} />
                      <Route path='/add' exact component={QuestionNew} />
                      <Route path='/404' component={MissingPage} />
                    </Switch>
                  : <div>
                        <Route component={AuthenticationList} />
                    </div>
                }
              </div>
          }
        </div>
      </Router>
    );
  }
}

function mapStateToProps ({ authedUser, questions }) {
  return {
    isAuthenticated: authedUser !== null,
    loading: questions === null
  }
}

export default connect(mapStateToProps)(App)
