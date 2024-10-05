// const express = require('express');
// const mysql = require('mysql');

// const app = express();
// const port = 5500;

// // MySQL connection
// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'Root@987',
//     database: 'message'
// });

// // Connect to MySQL
// connection.connect((err) => {
//     if (err) {
//         console.error('Error connecting to database: ' + err.stack);
//         return;
//     }
//     console.log('Connected to database as id ' + connection.threadId);
// });

// // Middleware to parse JSON bodies
// app.use(express.json());
// // Middleware to parse URL-encoded bodies
// app.use(express.urlencoded({ extended: true }));

// // Route for handling form submission
// app.post('/submit', (req, res) => {
//     const { name, email, subject, message } = req.body;

//     // Insert data into database
//     const sql = "INSERT INTO messages (name, email, subject, message) VALUES (?, ?, ?, ?)";
//     connection.query(sql, [name, email, subject, message], (err, result) => {
//         if (err) {
//             console.error('Error storing data: ' + err);
//             res.status(500).send('Error storing data');
//             return;
//         }
//         console.log('Data stored successfully');
//         res.send('Data stored successfully');
//     });
// });

// // Serve the static HTML file
// app.use(express.static(__dirname));

// // Start the server
// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });




// server.js (or app.js)

const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 5500;

// MySQL connection
const connection = mysql.createConnection({
    host: 'localhost', // Correct the host name
    user: 'root', // Replace with your MySQL username
    password: 'Root@987', // Replace with your MySQL password
    database: 'message'
});

// Connect to MySQL
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to database: ' + err.stack);
        return;
    }
    console.log('Connected to database as id ' + connection.threadId);
});

// Middleware to parse JSON bodies
app.use(express.json());
// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

// Serve static files (HTML, CSS, etc.)
app.use(express.static(__dirname));

// Route for handling form submission
app.post('/submit', (req, res) => {
    const { name, email, subject, message } = req.body;

    // Insert data into database
    const sql = "INSERT INTO messages (name, email, subject, message) VALUES (?, ?, ?, ?)";
    connection.query(sql, [name, email, subject, message], (err, result) => {
        if (err) {
            console.error('Error storing data: ' + err);
            res.status(500).send('Error storing data');
            return;
        }
        console.log('Data stored successfully');
        res.send('Data stored successfully');
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
