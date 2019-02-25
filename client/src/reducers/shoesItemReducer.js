
import { GET_ITEMS, ITEMS_LOADING} from '../actions/types';

const initialState = {
	shoesItems: [],
	loading: false
}

export default function(state = initialState, action){
	switch(action.type) {
		case GET_ITEMS:
			return {
				...state,
				shoesItems: action.payload,
				loading: false
			};
		case ITEMS_LOADING:
			return {
				...state,
				loading: true
			};
		default:
			return state;
	}
}