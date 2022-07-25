const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const nodemailer = require("nodemailer");
require("dotenv").config();

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

// Mail server setup
const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: false,
    tls: {
        ciphers: "SSLv3"
    },
    auth: {
        user: process.env.MAIL_ADDRESS,
        pass: process.env.MAIL_PWD
    },
    from: process.env.MAIL_ADDRESS,
});

// Verify mail server connection configuration
transporter.verify(function(error, success) {
    if (error) {
        console.log(error);
    } else if (success) {
        console.log("Mail Server at host: '" + process.env.MAIL_HOST + "' using port '" + process.env.MAIL_PORT + "' is ready");
    }
});

app.post('/api/mail', (req, res) => {
    let name = req.body.name
    let email = req.body.email
    let message = req.body.message
    let emailTo = process.env.MAIL_RECIEVER

    let mail = {
        from: 'noreply@mathiasharestad.no',
        to: emailTo,
        subject: name,
        text: message + " \n" + "Contact info: " + email
}
    // Throttle calls using date or uuid's here...

    transporter.sendMail(mail, (err, data) => {
        if (err) {
            console.log(err);
            res.status(500).end();
        } else {
            res.status(200).end();
        }
    })
})

module.exports = app;
