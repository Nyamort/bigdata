const mongoose = require('mongoose');
const PostSchema = new mongoose.Schema({
	entry: {
		type: String,
		required: true,
	},
	categories: {
		type: Array,
		required: true,
	},
}, {timestamps: true});

module.exports = mongoose.model('Post', PostSchema, 'posts');
