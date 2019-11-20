import {
  fetchAuthRequest,
  fetchAuthSuccess,
  fetchAuthUserDataError
} from "../actions/actions"

export const serverConnectMiddleware = store => next => action => {
  
  console.log("Проверка fetchAuthRequest: " + action.type)
  
  if (action.type === fetchAuthRequest.toString()) {
    fetch(
      `https://loft-taxi.glitch.me/auth?username=test@test.com&password=123123`
    )
      .then(response => response.json())
      .then(data => {
        store.dispatch(fetchAuthSuccess(data))
      })
      .catch(error => {
        store.dispatch(fetchAuthUserDataError(error))
      });
  }
  const result = next(action)

  console.log("store after:" + store.getState())

  return result
}
