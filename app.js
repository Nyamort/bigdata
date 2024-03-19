require('dotenv').config();
const express = require('express');
const mongoose = require("mongoose");
const port = process.env.PORT || 3000;
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger_output.json')
const postRouter = require('./app/routes/posts');
const cors = require('cors');
const app = express();

app.use(cors())
app.use(express.urlencoded({extended: true}));
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))
app.use(express.json());

// Add "+srv" after "mongodb" if db is in cloud
mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`, {
	useNewUrlParser: true,
	useUnifiedTopology: true
});


app.get('/', (req, res) => {
	res.redirect('/posts');
});


postRouter(app);

app.use((req, res, next) => {
	res.status(404).json({message: 'Not found'});
})

const serverStart = () => {
	console.log(`Server running on port ${port}`);
}
app.listen(port, serverStart);
