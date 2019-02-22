import mongoose from 'mongoose';
import { ShoesSchema } from '../models/shoesModel';

const Shoes = mongoose.model('Shoes', ShoesSchema);


export const addShoesItem = (req, res) => {
	let newShoesItem = new Shoes(req.body);

	newShoesItem.save((err, shoes) => {
		if(err){
			res.send(err);
		}
		res.json(shoes);
	});
};

export const getShoesItems = (req, res) => {
	Shoes.find({}, (err, shoes) => {
		if(err){
			res.send(err);
		}
		res.json(shoes);
	});
};

export const getShoesItemWithID = (req, res) => {
	Shoes.findById(req.params.shoesId, (err, shoes) =>{
		if(err){
			res.send(err);
		}
		res.json(shoes);
	});
};

export const updateShoesItem = (req,res) => {
	Shoes.findOneAndUpdate({_id: req.params.shoesId}, req.body, { new: true }, (err, shoes) => {
		if(err){
			res.send(err);
		}
		res.json(shoes);
	});
};

export const deleteShoesItem = (req, res) => {
	Shoes.deleteOne({_id: req.params.shoesId}, (err, shoes) => {
		if(err){
			res.send(err);
		}
		res.json({ message: 'Successfully deleted contact'});
	});
}
