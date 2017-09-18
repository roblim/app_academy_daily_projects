import { postUser, postSession, deleteSession } from '../util/session_api_util.js';
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const RECEIVE_USER = "RECEIVE_USER";

const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

const signup = (user) => ({
  type: RECEIVE_USER,
  user
});

const login = (user) => (dispatch) => {
  postSession(user).then(
    (user2) => dispatch(receiveCurrentUser(user2)),
    (errors) => dispatch(receiveErrors(errors.responseJSON))
  );
};

const logout = () => (dispatch) => {
  deleteSession().then(
    () => dispatch(receiveCurrentUser(null)),
    (errors) => dispatch(receiveErrors(errors.responseJSON))
  );
};

export { receiveCurrentUser, receiveErrors, signup, login, logout };
