import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { merge } from 'lodash';

const SessionReducer = (state = { currentUser: null }, action) => {
  let newState;
  Object.freeze(state);
  switch(action.type) {
    case(RECEIVE_CURRENT_USER):
      newState = merge({}, state);
      newState.currentUser = action.currentUser;
      return newState;
    default:
      return state;
  }
};

export default SessionReducer;
