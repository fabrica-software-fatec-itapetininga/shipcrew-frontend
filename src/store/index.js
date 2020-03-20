import { persistStore } from 'redux-persist';

import createSagaMiddleware from 'redux-saga';
import persistReducers from './persistReducers';

import createStore from './createStore';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const sagaMonitor = process.env.NODE_ENV === 'dev' ? console.tron.createSagaMonitor() : null;

const sagaMiddlawares = createSagaMiddleware({ sagaMonitor });

const middlewares = [sagaMiddlawares];

export const store = createStore(persistReducers(rootReducer), middlewares);
export const persistor = persistStore(store);

sagaMiddlawares.run(rootSaga);
