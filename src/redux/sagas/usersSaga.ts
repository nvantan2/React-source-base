import { put, call, all, takeEvery } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import { usersConstants, REQUEST, SUCCESS, FAILURE } from '../constants';
import { Action, ResponseGenerator } from 'types/action';
import homeApi from 'api/homeApi';

function* getUsers(action: Action) {
  const getUserAPI = homeApi.users({ params: action.payload?.params });

  try {
    const response: ResponseGenerator = yield call(() => getUserAPI);

    if (response?.data) {
      yield put({
        type: SUCCESS(usersConstants.GET_USERS),
        payload: {
          response: {
            data: response?.data,
          },
        },
      });
    }
  } catch (error: any) {
    const errorMessage = error?.response?.data?.message;
    toast.error(errorMessage ? errorMessage : 'Something went wrong');
    yield put({
      type: FAILURE(usersConstants.GET_USERS),
      error: {},
    });
  }
}

function* usersSaga() {
  yield all([takeEvery(REQUEST(usersConstants.GET_USERS), getUsers)]);
}

export default usersSaga;
