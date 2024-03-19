const mangoose = require('mongoose');
const ProductSchema = new mangoose.Schema({
	entry: {
		type: String,
		required: true,
	},
	categories: {
		type: Array,
		required: true,
	},
}, {timestamps: true});

module.exports = mangoose.model('Product', ProductSchema, 'products');
