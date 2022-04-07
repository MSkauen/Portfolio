const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const session = require("express-session");
const cookieParser = require("cookie-parser");

const app = express();

app.use(
    session({
        secret: "347gh4h6kf6",
        resave: false,
        saveUninitialized: false,
    })
);
app.use(bodyParser.json());
app.use(cookieParser());

app.use(express.static(path.resolve(__dirname, "..", "..", "dist")));

app.use((req, res, next) => {
    if (req.method === "GET" && !req.path.startsWith("/api")) {
        res.sendFile(path.resolve(__dirname, "..", "..", "dist", "index.html"));
    } else {
        next();
    }
});
module.exports = app;
