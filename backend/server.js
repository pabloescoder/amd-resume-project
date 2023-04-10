require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const corsOptions = require("./config/corsOptions");
const PORT = process.env.PORT || 3500;

// Cross Origin Resource Sharing
app.use(cors(corsOptions));

// built-in middleware to handle urlencoded data (form data)
// "content-type: application/x-www-form-urlencoded"
app.use(express.urlencoded({ extended: false }));

// built-in middleware for json
app.use(express.json());

app.listen(PORT, () => console.log(`Server running on port ${PORT}...`));
