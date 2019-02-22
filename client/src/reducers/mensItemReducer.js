import { GET_ITEMS, ITEMS_LOADING} from '../actions/types';

const initialState = {
	mensItems: [],
	loading: false
}

export default function(state = initialState, action){
	switch(action.type) {
		case GET_ITEMS:
			return {
				...state,
				mensItems: action.payload,
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