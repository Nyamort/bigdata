const Post = require('../models/post');
const Controller = require("./Controller");

class PostController extends Controller{

	async findAll(req, res) {
		try {
			const posts = await Post.find();
			super.success(res, posts);
		} catch (error) {
			super.error(res, error);
		}
	}

	async findOne(req, res) {
		try {
			const post = await Post.findById(req.params.id);
			super.success(res, post);
		} catch (error) {
			super.error(res, error);
		}
	}

	async create(req, res) {
		try {
			const post = new Post({
				entry: req.body.entry,
				categories: req.body.categories,
			});
			await post.save();
			super.success(res, post);
		} catch (error) {
			super.error(res, error);
		}
	}


	async update(req, res) {
		try {
			const post = await Post.findByIdAndUpdate(req.params.id, {
				entry: req.body.entry,
				categories: req.body.categories,
			}, {runValidators: true})
			super.success(res, post);
		} catch (error) {
			super.error(res, error);
		}
	}

	async delete(req, res) {
		try {
			const post = await Post.findByIdAndDelete(req.params.id);
			super.success(res, post);
		} catch (error) {
			super.error(res, error);
		}
	}
}

module.exports = new PostController()
