import React, { Component } from 'react';
import { connect } from 'react-redux'
import { handleInitialData } from './actions/shared';
import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    const { loading } = this.props;
    return (
      <div className="App">
        <h1>Would You Rather?</h1>
        {loading === true ?
          null :
          <h2></h2>
        }
      </div>
    );
  }
}

export default connect()(App)
