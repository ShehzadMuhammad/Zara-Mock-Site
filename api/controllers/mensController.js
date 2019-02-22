import mongoose from 'mongoose';
import { MensSchema } from '../models/mensModel';

const Mens = mongoose.model('Mens', MensSchema);


export const addMensItem = (req, res) => {
	let newMensItem = new Mens(req.body);

	newMensItem.save((err, mens) => {
		if(err){
			res.send(err);
		}
		res.json(mens);
	});
};

export const getMensItems = (req, res) => {
	Mens.find({}, (err, mens) => {
		if(err){
			res.send(err);
		}
		res.json(mens);
	});
};

export const getMensItemWithID = (req, res) => {
	Mens.findById(req.params.mensId, (err, mens) =>{
		if(err){
			res.send(err);
		}
		res.json(mens);
	});
};

export const updateMensItem = (req,res) => {
	Mens.findOneAndUpdate({_id: req.params.mensId}, req.body, { new: true }, (err, mens) => {
		if(err){
			res.send(err);
		}
		res.json(mens);
	});
};

export const deleteMensItem = (req, res) => {
	Mens.deleteOne({_id: req.params.mensId}, (err, mens) => {
		if(err){
			res.send(err);
		}
		res.json({ message: 'Successfully deleted contact'});
	});
};