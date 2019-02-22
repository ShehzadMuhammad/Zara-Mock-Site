import {
	addMensItem,
	getMensItems,
	getMensItemWithID,
	updateMensItem,
	deleteMensItem
} from '../controllers/mensController';

import {
	addWomensItem,
	getWomensItems,
	getWomensItemWithID,
	updateWomensItem,
	deleteWomensItem
} from '../controllers/womensController';

import {
	addShoesItem,
	getShoesItems,
	getShoesItemWithID,
	updateShoesItem,
	deleteShoesItem
} from '../controllers/shoesController';

const routes = (app) => {
	//Mens Section Route
	app.route('/mens')
	.get((req, res, next) => {
		//middleware
		console.log(`Request from: ${req.originalUrl}`);
		console.log(`Request type : ${req.method}`);
		next();
	}, getMensItems)
	.post(addMensItem);

	app.route('/mens/:mensId')
	//get specific mens Item
	.get(getMensItemWithID)
	//put request
	.put(updateMensItem)
	//delete request
	.delete(deleteMensItem);

	//Womens Section Route
	app.route('/womens')
	.get((req, res, next) => {
		//middleware
		console.log(`Request from: ${req.originalUrl}`);
		console.log(`Request type : ${req.method}`);
		next();
	}, getWomensItems)
	.post(addWomensItem);

	app.route('/womens/:womensId')
	//get specific womens item
	.get(getWomensItemWithID)
	//put request
	.put(updateWomensItem)
	//delete request
	.delete(deleteWomensItem);

	//Shoes Section Route
	app.route('/shoes')
	.get((req, res, next) => {
		//middleware
		console.log(`Request from: ${req.originalUrl}`);
		console.log(`Request type: ${req.method}`);
		next();
	}, getShoesItems)
	.post(addShoesItem);

	app.route('/shoes/:shoesId')
	//get specific shoes item
	.get(getShoesItemWithID)
	//put request
	.put(updateShoesItem)
	//delete request
	.delete(deleteShoesItem);
};

export default routes;