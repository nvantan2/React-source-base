import { put, call, all, takeEvery } from 'redux-saga/effects';

import { authConstants, REQUEST, SUCCESS, FAILURE } from '../constants';
import { Action, ResponseGenerator } from 'types/action';
import { CookiesStorage } from 'shared/config/cookie';
import authApi from 'api/authAPi';
import { history } from '../../history';
import { ROUTER } from 'shared/constant/routes';

function* loginAuthManual(action: Action) {
  const dataLogin = {
    username: action.payload?.response.username,
    password: action.payload?.response.password,
  };
  const loginApi = authApi.login(dataLogin);

  try {
    const response: ResponseGenerator = yield call(() => loginApi);

    if (response?.data?.token) {
      CookiesStorage.setAccessToken(response.data.token);
      yield put({
        type: SUCCESS(authConstants.LOGIN),
        payload: {
          response: {
            fullName: 'name',
          },
        },
      });
      history.push(ROUTER.Home);
    }
  } catch (error) {
    yield put({
      type: FAILURE(authConstants.LOGIN),
      error: {},
    });
  }
}

// function* logOutAuth(action: Action) {
//   const logoutApi = Api.post(URL_LOGOUT, {});

//   try {
//     yield call(() => logoutApi);
//     yield put({
//       type: SUCCESS(authConstants.LOGOUT),
//       payload: {},
//     });
//     CookiesStorage.clearCookieData('accessToken');
//   } catch (error) {
//     yield put({
//       type: FAILURE(authConstants.LOGOUT),
//       error: {},
//     });
//   }
// }

function* authSaga() {
  yield all([takeEvery(REQUEST(authConstants.LOGIN), loginAuthManual)]);
  // yield all([takeEvery(REQUEST(authConstants.LOGOUT), logOutAuth)]);
}

export default authSaga;
