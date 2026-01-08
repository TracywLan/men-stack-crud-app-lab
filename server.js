const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const connectDB = require('./db/connections')
const Chiikawa = require('./models/chiikawa')


const app = express();
app.use(express.urlencoded({ extended: true }));

//Middleware



// GET / - index: display all ckw
app.get("/", async (req, res) => {
  res.render("index.ejs");
});


// GET /chiikawas/new - new: shows a form to create a new friend
app.get("/chiikawas/new", (req, res) => {
    res.render('chiikawas/new.ejs')
})


// POST /chiikawas - create: create new ckw friend
app.post("/chiikawas", async (req, res) => {
    console.log(req.body);
    res.redirect("/chiikawas/new")
    
})

// GET /chiikawas/:id - show: display a specific friend by its ID

// GET 	/chiikawas/:id/edit - edit: form to edit existing form

// PUT 	/chiikawas/:id - update: update friend by its ID

// DELETE /chiikawas/:id - destroy: delete by ID

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
