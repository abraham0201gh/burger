// Code to initiate/connect Node to MySQL. Includes export connection. [standard]

//Require mysql
var mysql = require("mysql");


//When deploying to Heroku, need to include JAWSDB_URL information
var connection;
if(process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
//Set up the connection information
connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "3edc#EDC",
    database: "burgers_db"
});
}

// Connect to the database
connection.connect(function(err) {
    connection.query("SELECT * FROM burgers", function(err, result, fields) { 
        if (err) throw err; console.log(result)});
        if (err) { 
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Export connection
module.exports = connection;

