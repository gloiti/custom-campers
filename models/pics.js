
const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const picsSchema = new Schema({
  
  img_url: String,

});

// he creado un modelo que se llama User que utiliza como esquema o plantilla userSchema.

const Pics = mongoose.model("Pics", picsSchema);

module.exports = Pics;