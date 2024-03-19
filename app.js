require('dotenv').config();
const express = require('express');
const mongoose = require("mongoose");
const port = process.env.PORT || 3000;
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger_output.json')
const productRouter = require('./app/routes/products');
const app = express();

app.use(express.urlencoded({extended: true}));
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`, {
	useNewUrlParser: true,
	useUnifiedTopology: true
});


app.get('/', (req, res) => {
	res.redirect('/products');
});


productRouter(app);

app.use((req, res, next) => {
	res.render('errors/404');
})

const serverStart = () => {
	console.log(`Server running on port ${port}`);
}
app.listen(port, serverStart);
