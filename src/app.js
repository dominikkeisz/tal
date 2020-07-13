const express = require('express');
const dotenv = require('dotenv');
dotenv.config('../.env');
const app = express();
const port = process.env.PORT || 8080;
const mongoose = require('mongoose');
const dbLink = 'mongodb://tal-user:pass@database:27017/tal';

// Import routes
const authRouter = require('./backend/api-routes/auth');

// Connect to db
mongoose.connect(
  dbLink,
  { useNewUrlParser: true },
  (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('Database connection established successfully');
    }
  }
);

// Middlewares
app.use(express.json());

// Route middlawares
app.use('/api/user', authRouter);

app.listen(
  port,
  () => console.log(`App is listening on http://localhost:${port}`)
);
