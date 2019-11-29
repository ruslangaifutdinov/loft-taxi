import { combineReducers } from 'redux';
import { fork } from 'redux-saga/effects';

import auth from '../redux/reducer/index';
import { watchFetchAuthRequest, watchDoAuthLogout, registerSaga } from '../saga/authRequest';

export function* sagas() {
  yield fork(watchFetchAuthRequest);
  yield fork(watchDoAuthLogout);
  yield fork(registerSaga);

}

export default combineReducers({ auth });
