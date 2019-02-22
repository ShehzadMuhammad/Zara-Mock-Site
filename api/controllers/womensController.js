import mongoose from 'mongoose';
import { WomensSchema } from '../models/womensModel';

const Womens = mongoose.model('Womens', WomensSchema);


export const addWomensItem = (req, res) => {
	let newWomensItem = new Womens(req.body);

	newWomensItem.save((err, womens) => {
		if(err){
			res.send(err);
		}
		res.json(womens);
	});
};

export const getWomensItems = (req, res) => {
	Womens.find({}, (err, womens) => {
		if(err){
			res.send(err);
		}
		res.json(womens);
	});
};

export const getWomensItemWithID = (req, res) => {
	Womens.findById(req.params.womensId, (err, womens) =>{
		if(err){
			res.send(err);
		}
		res.json(womens);
	});
};

export const updateWomensItem = (req,res) => {
	Womens.findOneAndUpdate({_id: req.params.womensId}, req.body, { new: true }, (err, womens) => {
		if(err){
			res.send(err);
		}
		res.json(womens);
	});
};

export const deleteWomensItem = (req, res) => {
	Womens.deleteOne({_id: req.params.womensId}, (err, womens) => {
		if(err){
			res.send(err);
		}
		res.json({ message: 'Successfully deleted contact'});
	});
}