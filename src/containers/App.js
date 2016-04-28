import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import T9 from '../containers/T9';
import Keypad from '../containers/Keypad';

/**
 * It is common practice to have a 'Root' container/component require our main App (this one).
 * Again, this is because it serves to wrap the rest of our application with the Provider
 * component to make the Redux store available to the rest of the app.
 */
export default class App extends Component {
  render() {
    // we can use ES6's object destructuring to effectively 'unpack' our props
    const { counter, actions } = this.props;
    return (
      <div className="main-app-container">
        <div className="main-app-nav">T9 Keypad</div>
        {/* notice that we then pass those unpacked props into the Counter component */}
        <T9 />
        <Keypad />
      </div>
    );
  }
}

export default connect()(App);
