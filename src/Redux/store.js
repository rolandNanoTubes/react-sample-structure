import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createSageMiddleWare from 'redux-saga';
import rootReducer from './reducers';

import rootSaga from './saga';

const sagaMiddleware = createSageMiddleWare();

const middleware = [thunk, sagaMiddleware];

const appStore = createStore(rootReducer, applyMiddleware(...middleware));

sagaMiddleware.run(rootSaga);

export default appStore;
