const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/custom-campers',{useNewUrlParser: true });
const Pics = require('../models/pics');

const pics = [
  	
  	{
    	img_url:"https://customcamper.es/wp-content/uploads/2018/08/customcamper.es-Ducato-Boxer-Jumper-L4H2-3.jpg" 
  	},
    {
      img_url:"https://customcamper.es/wp-content/uploads/2018/08/customcamper.es-Ducato-Boxer-Jumper-L4H2-15.jpg" 
    },
    {
      img_url: "https://customcamper.es/wp-content/uploads/2018/08/customcamper.es-Ducato-Boxer-Jumper-L4H2-1.jpg"
    },
    {
      img_url:"https://customcamper.es/wp-content/uploads/2018/08/customcamper.es-Ducato-Boxer-Jumper-L4H2-18.jpg" 
    },
    {
      img_url: "https://customcamper.es/wp-content/uploads/2018/08/customcamper.es-Ducato-Boxer-Jumper-L4H2-27.jpg"
    },
    {
      img_url:"https://customcamper.es/wp-content/uploads/2018/08/customcamper.es-Ducato-Boxer-Jumper-L4H2-28.jpg" 
    },
    {
      img_url:"https://customcamper.es/wp-content/uploads/2018/09/Boxer-L2-H2.jpg" 
    },
    {
      img_url:"https://customcamper.es/wp-content/uploads/2018/09/paneles-laterales.jpg"
    },
    {
      img_url:"https://customcamper.es/wp-content/uploads/2018/09/customcamper.es-Ducato-Boxer-Jumper-L4H2-19.jpg"
    },
    {
      img_url:"https://customcamper.es/wp-content/uploads/2018/09/dometic-hsg-2445.jpg"
    },
    {
      img_url:"https://customcamper.es/wp-content/uploads/2018/08/customcamper.es-Volkswagen-T6.jpeg"
    },
    {
      img_url:"https://customcamper.es/wp-content/uploads/2018/08/customcamper.es-Volkswagen-T6-3.jpeg" 
    },
    {
      img_url:"https://customcamper.es/wp-content/uploads/2018/08/customcamper.es-Volkswagen-T6-2.jpeg" 
    },
    {
      img_url:"https://customcamper.es/wp-content/uploads/2018/08/customcamper.es-Volkswagen-T6-9.jpeg" 
    },
    {
      img_url:"https://customcamper.es/wp-content/uploads/2018/08/customcamper.es-Volkswagen-T6-8.jpeg" 
    },
    {
      img_url:"https://customcamper.es/wp-content/uploads/2018/08/customcamper.es-Volkswagen-T6-6.jpeg" 
    },
    {
      img_url:"https://customcamper.es/wp-content/uploads/2018/08/customcamper.es-Volkswagen-T6-5.jpeg" 
    },
    {
      img_url:"https://customcamper.es/wp-content/uploads/2018/10/furgo-renault-trafic-2018.jpg" 
    }
];

Pics.create(pics, (err, docs) => {
  if (err) {
    throw err;
  }
  mongoose.connection.close();
});