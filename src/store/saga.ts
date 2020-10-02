import { put, takeEvery } from 'redux-saga/effects';
import { userActions } from 'store';

function* getUserSaga() {
  try {
    yield put(userActions.setUser({ name: 'tester' }));
  } catch (error) {
    console.log(error?.response);
  }
}

function* saga() {
  const { load } = userActions;

  yield takeEvery(load, getUserSaga);
}

export default saga;
