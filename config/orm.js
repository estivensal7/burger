//Importing MySQL connection
const connection = require('../config/connection.js');


//creating ORM object for DB queries
const orm = {

	// retrieving all items from DB
	all: function(tableInput, cb) {
		connection.query(
			"SELECT * FROM ??",
			[tableInput],
			function(err, data) {
				if(err) {
					throw err;
				} else {
					cb(data);
				}
			});
	},

	// inputting data into DB
	insert: function(tableInput, colInput, value, cb) {
		connection.query(
			'INSERT INTO ?? (??) VALUE (?)',
			[tableInput, colInput, value],
			function(err, data) {
				if(err) {
					throw err;
				} else {
					cb(data);
				}
			});
	},

	// updating DB with specific parameters
	update: function(tableInput, state, id, cb) {
		connection.query(
			'UPDATE ?? SET devoured = ? WHERE id = ?',
			[tableInput, state, id],
			function(err, data) {
				if (err) {
					throw err;
				} else {
					cb(data);
				}
			});
	}
};

module.exports = orm;