import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as T9Actions from '../actions/T9Actions';
import T9 from '../components/T9';

function mapStateToProps(state) {
  return {
    digits: state.digits,
    words: state.words
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(T9Actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(T9);
