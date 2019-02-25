import { combineReducers } from 'redux';
import mensItemReducer from './mensItemReducer';
import womensItemReducer from './womensItemReducer';
import shoesItemReducer from './shoesItemReducer';
import shoppingCartReducer from './shoppingCartReducer';


export default combineReducers({
	mensItem: mensItemReducer,
	womensItem: womensItemReducer,
	shoesItem: shoesItemReducer,
	cartItem: shoppingCartReducer
});