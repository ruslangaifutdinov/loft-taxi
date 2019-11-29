import { createAction } from 'redux-actions'

export const fetchAuthRequest = createAction('FETCH_AUTH_REQUEST')
export const fetchAuthSuccess = createAction('FETCH_AUTH_SUCCESS')
export const fetchAuthUserDataError = createAction('FETCH_AUTH_USER_DATA_ERROR')
export const fetchAuthFailure = createAction('FETCH_AUTH_FAILURE')
export const doAuthLogout = createAction('DO_AUTH_LOGOUT')

export const sendRegisterRequest = createAction("SEND_REGISTER_REQUEST");
export const sendRegisterSuccess = createAction("SEND_REGISTER_SUCCESS");
export const sendRegisterFailure = createAction("SEND_REGISTER_FAILURE");
