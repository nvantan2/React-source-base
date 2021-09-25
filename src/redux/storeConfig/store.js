import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../reducers/rootReducer';

const persistConfig = {
  key: 'nothing',
  storage: storage,
  whitelist: [], // which reducer want to store
};

const pReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();
const store = createStore(pReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

const persistor = persistStore(store);

export { store, persistor, sagaMiddleware };
