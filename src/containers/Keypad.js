import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as KeypadActions from '../actions/KeypadActions';
import Keypad from '../components/Keypad';

function mapStateToProps(state) {
  return {
    digits: state.digits
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(KeypadActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Keypad);
