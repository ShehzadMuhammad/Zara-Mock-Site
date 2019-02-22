import { combineReducers } from 'redux';
import mensItemReducer from './mensItemReducer';

export default combineReducers({
	mensItem: mensItemReducer
});