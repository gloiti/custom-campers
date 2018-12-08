
const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const picsSchema = new Schema({
  
  img_url: String,

});

const Pics = mongoose.model("Pics", picsSchema);

module.exports = Pics;