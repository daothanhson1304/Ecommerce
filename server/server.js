const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");

// Middleware
dotenv.config();
app.use(require("morgan")("combined"));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/v1", require("./routes/index"));
// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
