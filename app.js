const express = require("express");
const cors = require("express");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res)=> {
    res.json({ massage: "Welcome to contact book application."});
});
module.exports = app;
