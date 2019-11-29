import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import {
  fetchAuthRequest,
  fetchAuthSuccess,
  fetchAuthFailure,
  doAuthLogout,
  sendRegistrationRequest
} from '../actions/actions';

const isLoading = handleActions(
  {
    [fetchAuthRequest]: () => true,
    [fetchAuthSuccess]: () => false,
    [fetchAuthFailure]: () => false
  },
  false
)

const isLoggedIn = handleActions(
  {
    [fetchAuthSuccess]: () => true,
    [doAuthLogout]: () => false
  },
  localStorage.getItem('isLoggedIn') ? true : false
)

const error = handleActions(
  {
    [fetchAuthRequest]: () => null,
    [fetchAuthFailure]: (_store, { payload }) => payload
  },
  null
)

const isRegIn = handleActions(
  {
    [sendRegistrationRequest]: () => true,
    [doAuthLogout]: () => false
  },
  localStorage.getItem('isRegIn') ? true : false
);

export default combineReducers({
  isLoading,
  isLoggedIn,
  error,
  isRegIn
});