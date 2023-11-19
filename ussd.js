const express = require("express");
const bodyParser = require("body-parser");
const mysql=require("mysql") 

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

    const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'test'
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database:', err);
    response=err;
    return;
  }
  response="success";
  console.log('Connected to MySQL database');
}); 
app.post("/", (req, res) => {
  const text = req.body.text;
  let pasword="";
  let response = "";

  if (text === "") {
    // This is the first request. Note how we start the response with CON
    response = `CON Welcome to kabarak university portal\n Enter your Registration number to log in ${db}`;
  } else if (text === "INTE/MG/2277/05/18") {
    // Business logic for first level response
    connection.query('SELECT * FROM user', (error, results, fields) => {
  if (error) {
    console.error('Error executing query:', error);
    return;
  }

  // Process the query results
  console.log('Query Results:', results[0]['pword']);
password=results[0]['pword'];
  // Close the database connection when done with all operations
  connection.end();
});
    response = `CON Enter password:`;
  } else if (text === "INTE/MG/2277/05/18*123456") {
    // Business logic for first level response
    response = `CON What do you need to accomplish in the system?\n 1. Check results \n2. Close`;
  } 
   else if (text === "INTE/MG/2277/05/18*123456*2") {
  response = `END Go back\n`;
    response += `END cancel`;
  } else {
    response = `END Go back\n`;
    response += `END cancel`;
  }

  res.set("Content-Type", "text/plain");
  res.send(response);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
