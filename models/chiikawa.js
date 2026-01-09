const mongoose = require('mongoose');

const chiikawaSchema = new mongoose.Schema({
  name: { type: String, required: true },
  chiikawaImage: String,
  description: String,
});

const Chiikawa = mongoose.model("Chiikawa", chiikawaSchema); // create model

module.exports = Chiikawa