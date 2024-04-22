const express = require('express');
const axios = require('axios');
const bcrypt = require('bcrypt');
const bard = require('./bard'); // Assuming bard.js is in the same directory
const path = require('path'); // Import path module to handle file paths

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set the views directory relative to the current directory
app.set('views', path.join(__dirname, 'views'));

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Your routes
app.get('/', (req, res) => {
    res.render('index')
});

app.get('/index', (req, res) => {
    res.render('index');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/dashboard', (req, res) => {
    // Assuming you have logic here to fetch data for the dashboard
    res.render('dashboard');
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.get('/register', (req, res) => {
    res.render('register');
});

app.get('/bollywood', (req, res) => {
    res.render('bollywood');
});

// 404 Not Found page
app.use((req, res) => {
    res.status(404).render('404');
});

// Error handler middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
