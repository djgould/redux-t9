import { ADD_DIGIT, CLEAR_DIGITS } from '../constants/ActionTypes';
import { fetchWords } from './T9Actions'

export function pressButton(digit, digits) {
  return dispatch => {
    dispatch(addDigit(digit))
    dispatch(fetchWords(digits + digit))
  }
}

export function addDigit(digit) {
  return {
    type: ADD_DIGIT,
    digit: digit
  }
}

export function clearDigits() {
  return {
    type: CLEAR_DIGITS,
  }
}
