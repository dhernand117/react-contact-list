import {combineReducers} from 'redux';
import { contactReducer } from './contactreducer';

//*Here we will be combining all our reducers into a single root reducer using the combineReducers hook
export default combineReducers ({
    contact:contactReducer,
})