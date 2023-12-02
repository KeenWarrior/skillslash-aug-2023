const express = require("express");
const cors = require("cors");
const reposRouter = require("./routes/repos.route");
const authRouter = require("./routes/auth.route");

const app = express();

app.use(cors());

app.use(express.json());

app.use("/repos", reposRouter);
app.use("/auth", authRouter);

module.exports = app;
