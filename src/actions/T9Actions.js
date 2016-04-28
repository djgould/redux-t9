import { REQUEST_WORDS, RECIEVE_WORDS } from '../constants/ActionTypes';

export function fetchWords(digits) {
  return dispatch => {
    dispatch(requestWords())
    return fetch('http://localhost:3000/t9/'+digits)
            .then(response => response.json())
            .then(json => dispatch(recieveWords(json)))
  }
}

export function requestWords() {
  return {
    type: REQUEST_WORDS
  }
}

export function recieveWords(words) {
  return {
    type: RECIEVE_WORDS,
    words: words
  }
}
