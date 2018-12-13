const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/custom-campers',{useNewUrlParser: true });
const Pics = require('../models/pics');

const pics = [{}]
  	
Pics.create(pics, (err, docs) => {
  if (err) {
    throw err;
  }
  mongoose.connection.close();
});