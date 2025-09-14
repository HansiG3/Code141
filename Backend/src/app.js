const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const path = require("path");

const app = express();
app.use(
    cors({
        origin: process.env.CORS_ORIGIN || "*", // allow all for now
        credentials: true,
    })
);
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// ✅ Static folders
app.use(express.static(path.join(__dirname, "..", "public")));  // public files
app.use(express.static(path.join(__dirname, "..", "build")));   // React build

module.exports = { app };