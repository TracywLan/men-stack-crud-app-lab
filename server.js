const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./db/connections')
const Chiikawa = require('./models/chiikawa')
const app = express();


//Middleware
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.json())
app.use(express.urlencoded({ extended: true }));


// GET / - index: display all ckw
app.get("/", async (req, res) => {
  res.render("home.ejs");
});

app.get("/chiikawas", async (req, res) => {
    try {
    const allChiikawas = await Chiikawa.find();
    console.log('Found:',allChiikawas);
    res.render('chiikawas/index.ejs', { chiikawas: allChiikawas })
    } catch (err) {
        console.error(err);
        res.redirect('/')
    }
})


// GET /chiikawas/new - new: shows a form to create a new friend
app.get("/chiikawas/new", (req, res) => {
    res.render('chiikawas/new.ejs')
})


// POST /chiikawas - create: create new ckw friend
app.post("/chiikawas", async (req, res) => {
    const newChiikawa = await Chiikawa.create(req.body);
    console.log('✅ SAVED:', newChiikawa._id, req.body);
    res.redirect("/chiikawas/new")
})


// GET /chiikawas/:id - show: display a specific friend by its ID

// GET 	/chiikawas/:id/edit - edit: form to edit existing form

// PUT 	/chiikawas/:id - update: update friend by its ID

// DELETE /chiikawas/:id - destroy: delete by ID

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
