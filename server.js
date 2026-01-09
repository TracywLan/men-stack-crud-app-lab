const express = require('express');
const mongoose = require('mongoose');
const path = require('path')
const connectDB = require('./db/connections')
const Chiikawa = require('./models/chiikawa')
const chiikawaController = require('./controllers/chiikawaController')
const methodOverride = require("method-override");
const morgan = require("morgan");

const app = express();

//Middleware
app.set('view engine', 'ejs');
// app.use(morgan("dev"));
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));
app.set('view engine', 'ejs');




// Routes
app.get("/", async (req, res) => {
  res.render("home.ejs");
});

app.use(chiikawaController);

// 404 handler
app.use((req, res) => {
  res.status(404).render('404');
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
