const express = require('express');
const router = express.Router();
const PostController = require('../controllers/PostController');
const postRouter = (app) => {

	app.use('/posts', router);
	router.get('/', PostController.findAll);
	router.get('/:id', PostController.findOne);
	router.post('/', PostController.create);
	router.put('/:id', PostController.update);
	router.delete('/:id', PostController.delete);
}

module.exports = postRouter;
