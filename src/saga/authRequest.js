import { takeLatest, call, put, takeEvery } from 'redux-saga/effects';
import {
  fetchAuthRequest,
  fetchAuthSuccess,
  fetchAuthFailure,
  doAuthLogout,
  sendRegisterFailure,
	sendRegisterSuccess,
	sendRegisterRequest
} from '../redux/actions/actions';
import { authorize } from '../redux/middlewares/serverconnect';
import * as api from "../redux/middlewares/api";

export function* watchFetchAuthRequest() {
  yield takeLatest(fetchAuthRequest, function*({ payload }) {
    try {
      const result = yield call(authorize, payload);

      if (result.success) {
        localStorage.setItem('isLoggedIn', true);
        yield put(fetchAuthSuccess());
      } else {
        yield put(fetchAuthFailure('Неверное имя пользователя или пароль'));
      }
    } catch (error) {
      yield put(fetchAuthFailure('Произошла ошибка отправки данных'));
    }
  });
}

export function* watchDoAuthLogout() {
  yield takeLatest(doAuthLogout, () => {
    localStorage.removeItem('isLoggedIn');
  });
}

export function* sendRegisterRequestSaga(action) {
	try {
		const path = "register";
		const response = yield call(api.postAuthRequest, action.payload, path);
		yield call(api.saveToken, response.token);
		yield put(sendRegisterSuccess());
	} catch (error) {
		yield put(sendRegisterFailure(error));
		console.log(error);
	}
}

export function* registerSaga() {
	yield takeEvery(sendRegisterRequest, sendRegisterRequestSaga);
	yield takeEvery(doAuthLogout, function() {
		window.localStorage.removeItem("token");
	});
}