// setting up MySQL connection
const mysql = require('mysql');

const connection = mysql.createConnection({
	port: 3306,
	host: 'localhost',
	user: 'root',
	password: 'root',
	database: 'burgers_db'
});

// making connection
connection.connect(function(err) {
	if (err) {
		console.log(`Error connecting: ${err.stack}`);
		return;
	}
	console.log(`Connected as ID ${connection.threadId}`);
});

// Exporting connection for ORM use
module.export = connection;