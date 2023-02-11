const express = require("express");
const app = express();
const path = require("path");
const livereload = require("livereload");
const publicDirectory = path.join(__dirname, "public");
const nodemailer = require("nodemailer");
require("dotenv").config();
const bodyParser = require("body-parser");

app.use(express.static(publicDirectory));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.set("views", "./views");
app.set("view engine", "ejs");

// live-reload browser on client side changes
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(publicDirectory);

//send email
let transporter = nodemailer.createTransport({
  host: process.env.SMTP_SERVER,
  port: process.env.SMTP_PORT,
  secure: false,
  auth: {
    user: process.env.USERNAME,
    pass: process.env.PASSWORD,
  },
});

transporter.verify(function (error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages");
  }
});

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/about", (req, res) => {
  res.render("about.ejs");
});

app.post("/", (req, res) => {
  const message = {
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    subject: "Hello Jesse! I saw your portfolio...",
    html: `<html><body><pre>
    Sender Name: ${req.body.name}
    Sender Email: ${req.body.email}
    Message: ${req.body.message}
    </pre></body></html>`,
    replyTo: req.body.email,
  };

  transporter.sendMail(message);
  console.log("email sent");
  res.redirect("/");
});

app.listen(process.env.PORT || 5000, () => {
  console.log("Listening on port " + process.env.PORT);
});
