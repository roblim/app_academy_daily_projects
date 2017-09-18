import { RECEIVE_ERRORS } from '../actions/session_actions';
import { merge } from 'lodash';

const SessionErrorsReducer = (state = [], action) => {
  let newState;
  Object.freeze(state);
  switch(action.type) {
    case(action.type):
      if (!action.errors) { return state; }
      newState = action.errors.concat(state);
      return newState;
    default:
      return state;
  }
};

export default SessionErrorsReducer;
