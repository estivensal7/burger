const express = require('express');

const router = express.Router();

//import the model to use its database functions
const burger = require('../models/burger.js');

//creating all routes and setting up logic within those routes where required
router.get('/', function(req, res) {
	burger.all(function(data) {
		const hbsObject = {
			burgers: data
		};
		console.log(hbsObject);
		res.render('index', hbsObject);
	});
});

router.post('/api/burgers', function(req, res) {
	burger.create([
		'burger_name', 'devoured'
	], [
		req.body.burger_name, req.body.devoured
	], function(result) {
		//send back the id of the new quote
		res.json({ id: result.insertId });
	});
});

router.put('/api/burgers/:id', function(req, res) {
	const condition = 'id = ' + req.params.id;

	console.log("condition", condition);

	burger.update({
		devoured: req.body.devoured
	}, condition, function(result) {
		if (result.changedRows === 0) {
			//if no rows were changed, then the ID must not exist, so return 404 error
			return res.status(404).end();
		} else {
			res.status(200).end();
		}
	});
});

module.exports = router;