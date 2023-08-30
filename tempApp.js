require('dotenv').config();
const express = require('express');
const app = express();
const postRouter = require('./routes/post');
const errorHandler = require('./middleware/error-handler');

app.use(express.json());

app.use('/api/v1/posts', postRouter);

// Middleware to handle errors
app.use(errorHandler);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});