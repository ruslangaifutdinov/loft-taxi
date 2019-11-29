import { takeLatest, call, put, takeEvery } from 'redux-saga/effects';
import {
  fetchAuthRequest,
  fetchAuthSuccess,
  fetchAuthFailure,
  doAuthLogout,
  sendRegistrationRequest
} from '../redux/actions/actions';
import { authorize, regUser } from '../redux/middlewares/serverconnect';


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


export function* userRegistration(){
  yield takeEvery(sendRegistrationRequest, function* (action){
      try{
          console.log(action)
          const result = yield call(regUser,action)
          console.log(result)
      }
      catch(error){
        console.log('Error')
      }
  })
}