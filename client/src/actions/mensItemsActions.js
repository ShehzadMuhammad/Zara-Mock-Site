import axios from 'axios';
import { GET_ITEMS, ITEMS_LOADING } from './types';

export const getMensItems = () => dispatch => {
	dispatch(setMensItemsLoading());
	axios
		.get('/mens')
		.then(res => 
			dispatch({
				type: GET_ITEMS,
				payload: res.data
			})
		)

};


export const setMensItemsLoading = () => {
	return {
		type: ITEMS_LOADING
	}
};