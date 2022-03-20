import { combineReducers } from 'redux';
// import { routerReducer } from 'react-router-redux';
import { connectRouter } from 'connected-react-router'
import { SampleReducer } from '../Pages/Home';


export default (history) =>  combineReducers({
    sample: SampleReducer,
    router: connectRouter(history)
})