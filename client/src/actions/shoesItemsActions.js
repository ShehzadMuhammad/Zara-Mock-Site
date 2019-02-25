import axios from 'axios';
import { GET_ITEMS, ITEMS_LOADING } from './types';

export const getShoesItems = () => dispatch => {
	dispatch(setShoesItemsLoading());
	axios
		.get('/shoes')
		.then(res => 
			dispatch({
				type: GET_ITEMS,
				payload: res.data
			})
		)

};


export const setShoesItemsLoading = () => {
	return {
		type: ITEMS_LOADING
	}
};