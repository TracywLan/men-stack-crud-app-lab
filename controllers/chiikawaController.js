const Chiikawa = require("../models/chiikawa");
const express = require("express");
const router = express.Router();



// GET / - index: display all ckw
router.get("/characters", async (req, res) => {
    const allChiikawas = await Chiikawa.find();
    res.render('characters/index.ejs', { characters: allChiikawas }); 
});


// GET /characters/new - new: shows a form to create a new friend
router.get("/characters/new", (req, res) => {
    res.render('characters/new.ejs')
})


// POST /characters - create: create new ckw friend
router.post("/characters", async (req, res) => {
    const newChiikawa = await Chiikawa.create(req.body);
    res.redirect("/characters")
})


// GET /characters/:id - show: display a specific friend by its ID
router.get("/characters/:ckwId", async (req, res) => {
    const foundChiikawa = await Chiikawa.findById(req.params.ckwId);
    res.render("characters/show.ejs", { character: foundChiikawa })
})


// GET 	/characters/:id/edit - edit: form to edit existing form
router.get("/characters/:ckwId/edit", async(req, res) => {
    const foundChiikawa = await Chiikawa.findById(req.params.ckwId);
    console.log(foundChiikawa);
    res.render("characters/edit.ejs", { character: foundChiikawa })
})


// PUT 	/characters/:id - update: update friend by its ID
router.put("/characters/:ckwId", async(req, res) => {
    await Chiikawa.findByIdAndUpdate(req.params.ckwId, req.body);
    res.redirect(`/characters/${req.params.ckwId}`)
})


// DELETE /characters/:id - destroy: delete by ID
router.delete("/characters/:ckwId", async(req, res) => {
    await Chiikawa.findByIdAndDelete(req.params.ckwId);
    res.redirect("/characters")
})

module.exports = router