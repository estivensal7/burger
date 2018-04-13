// setting up MySQL connection
const mysql = require('mysql');

// making connection
// if (process.env.JAWSDB_URL) {
// 	connection = mysql.createConnection(process.env.JAWSDB_URL);
// } else {
	const connection = mysql.createConnection({
		port: 3306,
		host: "localhost",
		user: "root",
		password: "root",
		database: "burgers_db"
	})
// }

//connect to database
connection.connect(function(err) {
	if (err) {
		console.log("error connecting " + err.stack);
		return;
	}

	console.log("connected to id " + connection.threadId);
})

// Exporting connection for ORM use
module.exports = connection;