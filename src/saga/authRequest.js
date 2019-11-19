import { takeLatest, call, put } from 'redux-saga/effects';
import {
  fetchAuthRequest,
  fetchAuthSuccess,
  fetchAuthFailure,
  doAuthLogout
} from '../redux/actions/actions';
import { authorize } from '../redux/middlewares/serverconnect';

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
