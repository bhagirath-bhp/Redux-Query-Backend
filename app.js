const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const app = express();
const bodyParser = require("body-parser");
const userRoutes = require("./routes/user");

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/sample-db',);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => console.log('Connected to MongoDB'));

app.use(cors());

app.use(bodyParser.urlencoded({extended: false}))

app.use('/api/user', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
