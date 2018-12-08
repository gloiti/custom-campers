
const mongoose = require("mongoose");
const Schema   = mongoose.Schema;

const vansSchema = new Schema({
 
  model: String,
  img_url: String,
  price: Number,
  new:Boolean

});


const Vans = mongoose.model("Vans", vansSchema);

module.exports = Vans;