import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ADD_QUANTITY, SUBT_QUANTITY } from './types';

export const getItems = () => {
	return {
		type: GET_ITEMS
	};
};

export const deleteItem = (id) => {
	return {
		type: DELETE_ITEM,
		payload: id
	};
};

export const addItem = (cartItem) => {
	return{ 
		type: ADD_ITEM,
		payload: cartItem
	};
} ;

export const addQuantity = (id) => {
	return{
		type: ADD_QUANTITY,
		payload: id
	};
};

export const subtractQuantity = (id) => {
	return{
		type: SUBT_QUANTITY,
		payload: id
	};
};

