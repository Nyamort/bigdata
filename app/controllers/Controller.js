class Controller {
	error(res, error1, status = 500) {
		res.status(status).json({error: error1.message});
	}

	message(res, status, message) {
		res.status(status).json({message: message});
	}

	success(res,data, status = 200) {
		res.status(status).json(data);
	}

	notFound(res) {
		res.status(404).json({message: 'Not found'});
	}
}

module.exports = Controller;
