const mongoose = require('mongoose');
const CommentSchema = new mongoose.Schema({
	text:{
		type: String,
		required: true,
	}
}, {timestamps: true});

module.exports = mongoose.model('Comment', CommentSchema, 'comments');
