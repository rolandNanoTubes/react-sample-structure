import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createSageMiddleWare from 'redux-saga';
import rootReducer from './reducers';
import { createBrowserHistory } from 'history';

import rootSaga from './saga';

const sagaMiddleware = createSageMiddleWare();

const middleware = [thunk, sagaMiddleware];

export const history = createBrowserHistory();

// for redux dev tool
const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
        : compose;

const enhancer = composeEnhancers(
    applyMiddleware(...middleware),
    // other store enhancers if any
);

const appStore = createStore(rootReducer(history), enhancer);

sagaMiddleware.run(rootSaga);

export default appStore;
