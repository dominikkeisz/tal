const express = require('express');
const dotenv = require('dotenv');
dotenv.config('../../.env');
const app = express();
const mongoose = require('mongoose');
const dbLink = String(process.env.DB_CONNECTION);

// Import routes
const authRouter = require('./api-routes/auth');

// Connect to db
mongoose.connect(dbLink, { useNewUrlParser: true });

// Middlewares
app.use(express.json());

// Route middlawares
app.use('/api/user', authRouter);

module.exports = app;
