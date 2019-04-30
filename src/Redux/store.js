import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';


const middleware = [thunk];

const appStore = createStore(rootReducer, applyMiddleware(...middleware));

export default appStore;
