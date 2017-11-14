import React from 'react'
import { connect } from 'react-redux'
import { HashRouter as Router, Route } from 'react-router-dom'
import { helloMessage } from './App.css'


@connect(({TestReducer}) => ({value: TestReducer.value}))
export default class App extends React.PureComponent {
  render() {
    return (
      <Router>
        <div>
          <span className={helloMessage}>{this.props.value}</span>
          <Route exact path="/" render={() => "...Home Page"}/>
        </div>
      </Router>
    );
  }
}
