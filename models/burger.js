//import the orm to create functions that will interact with the database
const orm = require('../config/orm.js');

const burger = {
	all: function(cb) {
		orm.all('burgers', function(res) {
			cb(res);
		});
	},

	insert: function(value, cb) {
		orm.insert('burgers', 'burger_name', value, function(res) {
			cb(res);
		});
	},

	update: function(state, id, cb) {
		orm.update('burgers', state, id, function(res) {
			cb(res);
		});
	}
}

module.exports = burger;