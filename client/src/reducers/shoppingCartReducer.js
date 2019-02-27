import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING, ADD_QUANTITY, SUBT_QUANTITY, RESET_ITEMS} from '../actions/types';

const initialState = {
	cartItems: [],
	loading: false
}

export default function(state = initialState, action){
	switch(action.type) {

		case GET_ITEMS:
			return {
				...state,
				getItems: action.payload,
				loading: false
			};
		case DELETE_ITEM:
			return {
				...state,
				cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload)

			};
		case ADD_ITEM:
			return {
				...state,
				cartItems: [action.payload, ...state.cartItems]			
			};
		case ADD_QUANTITY:
			let addedItem = state.cartItems.find(cartItem => cartItem.id === action.payload)
			addedItem.quantity += 1
			addedItem.totalPrice = (addedItem.price * addedItem.quantity)
			return {
				...state,
			};
		case SUBT_QUANTITY:
			let subtItem = state.cartItems.find(cartItem => cartItem.id === action.payload)
			if(subtItem.quantity === 1){
			subtItem.totalPrice = 0
				return {
					...state,
					cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload)
				};
			}
			else {
				subtItem.quantity -= 1
				subtItem.totalPrice = (subtItem.price * subtItem.quantity)
				return {
					...state
				};
			}
		case RESET_ITEMS:
			return {
				...state,
				cartItems: []
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