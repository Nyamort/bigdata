const Controller = require("./Controller");
const {Types} = require("mongoose");
const Comment = require('../models/comment');
const Post = require('../models/post');


class CommentController extends Controller{

	async create(req, res) {
		/**
			#swagger.requestBody = {
				required: true,
				schema: { $ref: '#/components/schemas/CreateCommentRequest'}
			}
		*/
		/**
			#swagger.responses[201] = {
				description: 'Post created successfully',
				schema: { $ref: '#/components/schemas/Comment'}
		 	}
		 */
		try {
			const comment = new Comment({
				text: req.body.text,
			});
			await comment.save();
			const post = await Post.findByIdAndUpdate(req.params.id, {
				$push: {comments: comment._id}
            }, {new: true});
			super.success(res, comment, 201);
		} catch (error) {
			super.error(res, error);
		}
	}

	async update(req, res) {
		/**
			#swagger.requestBody = {
				required: true,
				schema: { $ref: '#/components/schemas/UpdateCommentRequest'}
			}
		 */
		/**
			#swagger.responses[200] = {
				description: 'Comment updated successfully',
				schema: { $ref: '#/components/schemas/Comment'}
		 	}
		 */
		try {
			const comment = await Comment.findByIdAndUpdate(req.params.commentId, req.body, {runValidators: true})
			if(!comment) super.notFound(res);
			super.success(res, comment);
		} catch (error) {
			super.error(res, error);
		}
	}

	async delete(req, res) {
		/**
			#swagger.responses[200] = {
				description: 'Comment deleted successfully',
				schema: { $ref: '#/components/schemas/Comment'}
		 	}
		 */
		try {
			const comment = await Comment.findByIdAndDelete(req.params.commentId);
			const post = await Post.findByIdAndUpdate(req.params.id, {
				$pull: {comments: req.params.commentId}
			}, {new: true});
			if(!comment) super.notFound(res);
			super.success(res, comment);
		} catch (error) {
			super.error(res, error);
		}
	}

	async findOne(req, res) {
		/**
			#swagger.responses[200] = {
				description: 'Comment found',
				schema: { $ref: '#/components/schemas/Comment'}
		 	}
		 */
		try {
			const comment = await Comment.findById(req.params.commentId);
			if(!comment) super.notFound(res);
			super.success(res, comment);
		} catch (error) {
			super.error(res, error);
		}
	}



}

module.exports = new CommentController()
