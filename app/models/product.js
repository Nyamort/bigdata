const mangoose = require('mongoose');
const ProductSchema = new mangoose.Schema({
	title: {
		type: String,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	category: {
		type: String,
		required: true,
	},
	image: {
		type: String,
		required: true,
	}
}, {timestamps: true});

module.exports = mangoose.model('Product', ProductSchema, 'products');
