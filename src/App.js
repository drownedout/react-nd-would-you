import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from './actions/shared';
import LoadingBar from 'react-redux-loading'
import './App.css';
import Nav from './components/navigation/Nav'
import QuestionList from './components/questions/QuestionList';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    const { loading } = this.props;
    return (
      <div>
        <Nav />
        <LoadingBar />
        <h1 className="App-title">Would You Rather?</h1>
        {loading === true
          ? null
          : <div>
              <QuestionList />
            </div>
        }
      </div>
    );
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App)
