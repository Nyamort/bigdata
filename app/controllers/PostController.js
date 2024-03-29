const Post = require('../models/post');
const Controller = require("./Controller");
const {Types} = require("mongoose");

class PostController extends Controller{

	async findAll(req, res) {
		/**
			#swagger.responses[200] = {
				description: 'Posts found',
				content: {
					"application/json": {
						schema:{
							type: "array",
							items: { "$ref": "#/components/schemas/Post"}
						}
					}
				}
			}
		*/
		try {
			const posts = await Post.find();
			super.success(res, posts);
		} catch (error) {
			super.error(res, error);
		}
	}

	async findOne(req, res) {
		/**
			#swagger.responses[200] = {
				description: 'Posts found',
				schema:{"$ref": "#/components/schemas/PostWithComments"}
			}
		 */
		try {
			const post = await Post.findById(req.params.id).populate('comments');
			if (!post) {
				return super.notFound(res);
			}
			super.success(res, post);
		} catch (error) {
			super.error(res, error);
		}
	}

	async create(req, res) {
		/**
			#swagger.requestBody = {
				required: true,
				schema: { $ref: '#/components/schemas/CreatePostRequest'}
			}
		 */
		/**
			#swagger.responses[201] = {
				description: 'Post created successfully',
				schema: { $ref: '#/components/schemas/Post'}
		 	}
		 */
		try {
			const post = new Post({
				entry: req.body.entry,
				content: req.body.content,
				categories: req.body.categories,
				price: req.body.price,
			});
			await post.save();
			super.success(res, post, 201);
		} catch (error) {
			super.error(res, error);
		}
	}


	async update(req, res) {
		try {
			/**
				#swagger.requestBody = {
					required: true,
					schema: { $ref: '#/components/schemas/UpdatePostRequest'}
				}
			*/
			const post = await Post.findByIdAndUpdate(req.params.id, {
				entry: req.body.entry,
				content: req.body.content,
				categories: req.body.categories,
				price: req.body.price,
			}, {runValidators: true, new: true})
			if (!post) {
				return super.notFound(res);
			}
			super.success(res, post);
		} catch (error) {
			super.error(res, error);
		}
	}

	async delete(req, res) {
		/**
			#swagger.responses[200] = {
				description: 'Posts found',
				schema:{"$ref": "#/components/schemas/Post"}
			}
		*/
		try {
			const post = await Post.findByIdAndDelete(req.params.id);
			if (!post) {
				return super.notFound(res);
			}
			super.success(res, post);
		} catch (error) {
			super.error(res, error);
		}
	}

	async sum(req, res) {
		/**
			#swagger.responses[200] = {
				description: 'Sum price found',
				schema:{"$ref": "#/components/schemas/Sum"}
			}
		 */
		try {
			const posts = await Post.aggregate([
				{
					$group: {
						_id: null,
						total: {
							$sum: "$price"
						}
					}
				},
				{
					$project: {
						_id: 0,
						total: 1
					}
				}
			]);
			super.success(res, posts[0]);
		} catch (error) {
			super.error(res, error);
		}
	}

	async average(req, res) {
		/**
			#swagger.responses[200] = {
				description: 'Average price found',
				schema:{"$ref": "#/components/schemas/Average"}
			}
		 */
		try {
			const posts = await Post.aggregate([
				{
					$group: {
						_id: null,
						average: {
							$avg: "$price"
						}
					}
				},
				{
					$project: {
						_id: 0,
						average: 1
					}
				}
			]);
			super.success(res, posts[0]);
		} catch (error) {
			super.error(res, error);
		}
	}

}

module.exports = new PostController()
