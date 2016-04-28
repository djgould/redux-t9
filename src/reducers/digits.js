import { ADD_DIGIT, CLEAR_DIGITS } from '../constants/ActionTypes';

export default function digits(state = '', action) {
  switch (action.type) {
  case ADD_DIGIT:
    return state + action.digit
  case CLEAR_DIGITS:
    return ''
  default:
    return state;
  }
}
