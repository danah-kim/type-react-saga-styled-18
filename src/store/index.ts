import saga from './saga';
import userReducer, { userActions } from './user';

import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { createBrowserHistory } from 'history';
import { combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';

const rootReducer = combineReducers({
  user: userReducer,
});

function* rootSaga() {
  yield all([saga()]);
}

export const customHistory = createBrowserHistory();

function createStore(initialState = {}) {
  const sagaMiddleware = createSagaMiddleware({
    context: {
      history: customHistory,
    },
  });
  const store = configureStore({
    reducer: rootReducer,
    middleware: [
      ...getDefaultMiddleware(),
      sagaMiddleware,
    ],
    preloadedState: initialState,
    devTools: process.env.NODE_ENV !== 'production',
  });

  sagaMiddleware.run(rootSaga);

  return store;
}

const dummyStore = configureStore({
  reducer: rootReducer,
});

declare global {
  type RootState = ReturnType<typeof rootReducer>;
  type Store = typeof dummyStore;
  type AppDispatch = typeof dummyStore.dispatch;
  type GetState = typeof dummyStore.getState;
}

export { createStore, userActions };
