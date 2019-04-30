import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import * as Sample from './sample';


export default combineReducers({
    ...Sample,
    router: routerReducer
})