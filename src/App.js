import React, { Component } from 'react';
import { connect } from 'react-redux'
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
      <div className="App">
        <LoadingBar />
        <Nav />
        <h1>Would You Rather?</h1>
        {this.props.loading === true
          ? null
          : <div>
              <QuestionList />
            </div>
        }
      </div>
    );
  }
}

export default connect()(App)
