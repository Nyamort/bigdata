class Controller {
	error(res, error, status = 500) {
		res.status(500).json({error: error.message});
	}

	message(res, status, message) {
		res.status(status).json({message: message});
	}

	success(res,data, status = 200) {
		res.status(status).json(data);
	}

	notFound(res) {
		this.error(res, {message: 'Not found'}, 404)
	}
}

module.exports = Controller;
