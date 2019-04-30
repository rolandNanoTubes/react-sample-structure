import { combineReducers } from 'redux';
// import { routerReducer } from 'react-router-redux';
import { connectRouter } from 'connected-react-router'
import sample from './sample';


export default (history) =>  combineReducers({
    sample,
    router: connectRouter(history)
})