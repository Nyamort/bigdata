const Product = require('../models/product');

class ProductController {
	async findAll(req, res) {
		try {
			const products = await Product.find();
			res.render('products/index', {products: products});
		} catch (error) {
			res.render('errors/500');
		}
	}

	async findOne(req, res) {
		try {
			const product = await Product.findById(req.params.id);
			res.render('products/show', {product: product});
		} catch (error) {
			res.render('errors/404');
		}
	}

	createForm(req, res) {
		res.render('products/create');
	}

	async editForm(req, res) {
		try {
			const product = await Product.findById(req.params.id);
			res.render('products/edit', {product: product});
		} catch (error) {
			res.render('errors/404');
		}
	}

	async create(req, res) {
		try {
			const product = new Product({
				title: req.body.title,
				description: req.body.description,
				price: req.body.price,
				image: req.body.image,
				category: req.body.category,
				rating: {
					rate: 0,
					count: 0
				}

			});
			await product.save();
			res.redirect('/products');
		} catch (error) {
			res.render('errors/500');
		}
	}

	async update(req, res) {
		try {
			await Product.findByIdAndUpdate(req.params.id, req.body, {runValidators: true})
			res.redirect('/products');
		} catch (error) {
			res.render('errors/500');
		}
	}

	async delete(req, res) {
		try {
			const product = await Product.findOne({_id: req.params.id, author: '65290e999779c00d5dd4c36e'});
			await Product.findByIdAndDelete(req.params.id);
			res.redirect('/products');
		} catch (error) {
			res.render('errors/500');
		}
	}
}

module.exports = new ProductController()
