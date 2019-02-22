import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const MensSchema = new Schema({
	itemName: {
		type: String,
		required: 'Enter the items name'
	},
	image: {
		type: String,
		required: 'Enter the image link'
	},
	description: {
		type: String,
		required: 'Enter the items description'
	},
	price: {
		type: Number,
		required: 'Enter the price'

	},
	created_date: {
		type: Date,
		default: Date.now
	}
});
