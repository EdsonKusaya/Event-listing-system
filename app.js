const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// MySQL configuration
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'event_db'
});

// Connect to MySQL
db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL');
});

// Middleware to parse POST requests
app.use(bodyParser.urlencoded({ extended: true }));

// Serve HTML form
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/home.html');
});

// Handle form submission
app.post('/submit', (req, res) => {
    const { username, password } = req.body;

    // Insert data into MySQL
    const query = 'INSERT INTO your_table (name, email) VALUES (?, ?)';
    db.query(query, [username, password], (err, result) => {
        if (err) {
            console.error('Error inserting data into MySQL:', err);
            return res.status(500).send('Error inserting data into MySQL');
        }

        console.log('Data inserted into MySQL:', result);
        res.send('Data inserted successfully');
    });
});

// Start the server
app.listen(port, () => {
    console.log( //localhost:${port}
)});