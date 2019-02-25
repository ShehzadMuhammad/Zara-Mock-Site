import axios from 'axios';
import { GET_ITEMS, ITEMS_LOADING } from './types';

export const getWomensItems = () => dispatch => {
	dispatch(setWomensItemsLoading());
	axios
		.get('/womens')
		.then(res => 
			dispatch({
				type: GET_ITEMS,
				payload: res.data
			})
		)

};


export const setWomensItemsLoading = () => {
	return {
		type: ITEMS_LOADING
	}
};