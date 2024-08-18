const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));

// Serve the HTML files
app.get('/', (req, res) => res.sendFile(path.join(__dirname, '../public/index.html')));
app.get('/login', (req, res) => res.sendFile(path.join(__dirname, '../public/login.html')));
app.get('/dashboard', (req, res) => res.sendFile(path.join(__dirname, '../public/dashboard.html')));
app.get('/transactions', (req, res) => res.sendFile(path.join(__dirname, '../public/transactions.html')));

// Handle form submission
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    // In a real application, you should validate credentials here
    if (username === 'user' && password === 'password') {
        res.redirect('/dashboard');
    } else {
        res.send('Invalid credentials');
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
