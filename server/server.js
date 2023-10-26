const express = require('express');
const dotenv = require('dotenv');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.DB_PORT || 3000;

// Middleware
dotenv.config();
app.use(express.json());
app.use(require('morgan')('combined'));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(require('cors')());

// Routes
app.use('/api/v1', require('./routes/index'));

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
