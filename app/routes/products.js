const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/ProductController');
const productRouter = (app) => {

	app.use('/products', router);
	router.get('/', ProductController.findAll);
	router.get('/create', ProductController.createForm);
	router.get('/:id', ProductController.findOne);
	router.get('/:id/edit', ProductController.editForm);
	router.post('/', ProductController.create);
	router.put('/:id', ProductController.update);
	router.delete('/:id', ProductController.delete);
}

module.exports = productRouter;
