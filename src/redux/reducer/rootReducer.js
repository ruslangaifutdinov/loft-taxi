import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import {
  fetchAuthRequest,
  fetchAuthSuccess,
  fetchAuthFailure,
  doAuthLogout,
  sendRegisterRequest,
	sendRegisterSuccess,
	sendRegisterFailure
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
    [sendRegisterRequest]: () => false,
		[sendRegisterFailure]: () => false,
		[sendRegisterSuccess]: () => true,
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

export const getIsLoggedIn = state => state.auth.isLoggedIn;

export const getError = state => state.auth.error;


export default combineReducers({
  isLoading,
  isLoggedIn,
  error
});