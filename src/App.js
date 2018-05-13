import React, { Component } from 'react';
import { connect } from 'react-redux'
import { handleInitialData } from './actions/shared';
import './App.css';
import QuestionList from './components/questions/QuestionList'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    const { loading } = this.props;
    return (
      <div className="App">
        <h1>Would You Rather?</h1>
        <QuestionList />
      </div>
    );
  }
}

export default connect()(App)
