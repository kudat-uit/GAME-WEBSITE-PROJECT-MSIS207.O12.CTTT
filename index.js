const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const userRouters = require("./routes/userRoutes");

const app = express();

dotenv.config();
app.use(cors());
app.use(express.json());
// Connect to MongoDB
mongoose.set("strictQuery", false);
const MONGODB_LINK = process.env.MONGODB_LINK
mongoose.connect(MONGODB_LINK, () => {
  console.log("Connect to mongodb...");
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}...`);
});

//http://localhost:8000/api/auth/login
//http://localhost:8000/api/auth/register
// create user
app.use("/api/auth", userRouters);