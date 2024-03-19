const express = require('express');
const router = express.Router();
const PostController = require('../controllers/PostController');
const CommentController = require('../controllers/CommentController');
const postRouter = (app) => {

	app.use('/posts', router);
	router.get('/', PostController.findAll);
	router.get('/:id', PostController.findOne);
	router.post('/', PostController.create);
	router.post('/:id/comments', CommentController.create);
	router.put('/:id/comments/:commentId', CommentController.update);
	router.delete('/:id/comments/:commentId', CommentController.delete);
	router.put('/:id', PostController.update);
	router.delete('/:id', PostController.delete);
}

module.exports = postRouter;
