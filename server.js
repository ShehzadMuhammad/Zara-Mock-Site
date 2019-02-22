import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from './api/routes/crmRoutes';

const app = express();
const PORT = process.env.PORT || 5000;


const uri = "mongodb+srv://dbUser:sq8xht8VoVp4eZOH@cluster0-2ezsd.mongodb.net/zara?retryWrites=true";

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