import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './api/routes/crmRoutes';

const app = express();
const PORT = process.env.PORT || 5000;


// const uri = this is where my mongo client link would go, ofc i cant put it here because of my password

//Connect to Monog
mongoose.connect(uri, {
   useNewUrlParser: true 
	}).then(() => {
	console.log('MongoDB Connected...');
	useNewUrlParser: true 
	}).catch(err => console.log(err));



//bodyparser setup
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

routes(app);

app.get('/', (req, res) => {
	res.send(`Node and express server is running on port: ${PORT}`);
});

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
