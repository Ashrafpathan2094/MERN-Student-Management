import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import adminRoutes from "./routes/admin.js";
import studentRoutes from "./routes/student.js";
import * as dotenv from 'dotenv';
import protect from "./middleware/authMiddleware.js";

const app = express();

app.use(bodyParser.json({ limit: "20mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "20mb", extended: true }));
app.use(cors());

app.use('/admin', adminRoutes);

app.use(protect)
app.use('/students', studentRoutes);
dotenv.config()
const CONNECTION_URL = process.env.MONGO_URL;

const PORT = process.env.PORT || 5000;


// mongoose.connect(constants.CONNECTION_URL)
//     .then(() => app.listen(constants.PORT, () => console.log(`Server Running on Port ${constants.PORT}`)))
//     .catch((error) => console.log(error.message));

// mongoose.Promise = global.Promise;

// mongoose.connect(CONNECTION_URL).then(() => app.listen(PORT, () =>
//     console.log(`Server running on port ${PORT}`))).catch((error) => console.log(error.message));




mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true }
).then(() => app.listen(PORT, () =>
    console.log(`Connection is established and running on port : ${PORT}`)
)).catch((err) => (console.log(err.message)
));


// const dotenv = require('dotenv');
// const mongoose = require('mongoose');

// dotenv.config();

// mongoose.set('strictQuery', false);
// mongoose.set('strictQuery', false);


