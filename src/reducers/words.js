import { RECIEVE_WORDS, REQUEST_WORDS } from '../constants/ActionTypes';

export default function words(state = [], action) {
  switch (action.type) {
  case RECIEVE_WORDS:
    return action.words
  case REQUEST_WORDS:
    return []
  default:
    return state;
  }
}
