// setting up MySQL connection
const mysql = require('mysql');

	// making connection
	const connection = mysql.createConnection({
		host: "gp96xszpzlqupw4k.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
		user: "ks9s3cliek4qtsgm",
		password: "j9enarqe8bys2l35",
		database: "hw83ybln5x4qnm9i"
	})

//connect to database
connection.connect(function(err) {
	if (err) {
		console.log("error connecting " + err.stack);
		return;
	}

	console.log("connected to id " + connection.threadId);
});

// Exporting connection for ORM use
module.exports = connection;