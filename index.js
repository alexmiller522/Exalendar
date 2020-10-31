const result = require("dotenv").config();

const express = require("express");
const mysql = require("mysql");
const db_tools = require('./database_tools');
var db_tool;

const app = express();
const port = process.env.PORT || 8000;

const views = `${__dirname}/views/`;

// Database Connection
var connection = mysql.createConnection({
	host	: process.env.DB_HOST,
	user: process.env.DB_USER,
	password: process.env.DB_PSWD,
	database: 'exalendar'
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
	db_tool = new db_tools(connection);
});

app.get("/", (req,res)=>{
  res.sendFile(views + 'index.html');
});

app.get("/about",(req,res) => {
  res.sendFile(views + 'about.html');
});

app.get("/contact", (req,res) => {
  res.sendFile(views + 'contact.html');
});

app.get("/login", (req,res) => {
  res.sendFile(views + 'login.html');
});

app.get("/signup", (req,res) => {
  res.sendFile(views + 'signup.html');
});

app.get("*", (req,res) => {
  res.sendFile(views + '404.html');
});

app.listen(port, () => {
  console.log(`Listening to requests on http://localhost:${port}`);
});
