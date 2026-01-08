const mongoose = require('mongoose');

const chiikawaSchema = new mongoose.Schema({
  name: { type: String, required: true },
  color: String,
  chiikawaImage: String,
});

const Chiikawa = mongoose.model("Chiikawa", chiikawaSchema); // create model

module.exports = Chiikawa