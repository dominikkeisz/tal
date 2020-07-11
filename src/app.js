const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const dbConnection = String(process.env.DB_CONNECTION);
const mongoose = require('mongoose');
// Import routes
const authRouter = require('./backend/api-routes/auth');
console.log(dbConnection);
// Connect to db
mongoose.connect(
  dbConnection,
  { useNewUrlParser: true },
  (err) => {
    if (err) {
      console.error('Error occured while connection to DB!');
    } else {
      console.log('Datbase connection established successfully');
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
