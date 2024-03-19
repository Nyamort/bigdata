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



}

module.exports = new CommentController()
