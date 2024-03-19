class Controller {
	error(res, error) {
		res.status(500).json({error: error.message});
	}

	message(res, status, message) {
		res.status(status).json({message: message});
	}

	success(res, data) {
		res.status(200).json(data);
	}
}

module.exports = Controller;
