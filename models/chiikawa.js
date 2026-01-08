

const mongoose = require('mongoose');

const chiikawaSchema = new mongoose.Schema({
  name: { type: String, required: true },
  color: String,
  image: String,
});

const Chiikawa = mongoose.model("Chiikawa", chiikawaSchema); // create model

module.exports = Chiikawa