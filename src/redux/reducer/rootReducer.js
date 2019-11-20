import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import {
  fetchAuthRequest,
  fetchAuthSuccess,
  fetchAuthFailure,
  doAuthLogout
} from '../actions/actions';

const isLoading = handleActions(
  {
    [fetchAuthRequest]: () => true,
    [fetchAuthSuccess]: () => false,
    [fetchAuthFailure]: () => false
  },
  false
);

const isLoggedIn = handleActions(
  {
    [fetchAuthSuccess]: () => true,
    [doAuthLogout]: () => false
  },
  localStorage.getItem('isLoggedIn') ? true : false
);

const error = handleActions(
  {
    [fetchAuthRequest]: () => null,
    [fetchAuthFailure]: (_store, { payload }) => payload
  },
  null
);

export default combineReducers({
  isLoading,
  isLoggedIn,
  error
});