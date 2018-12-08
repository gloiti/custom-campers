var express = require('express');
var router = express.Router();
const Pics = require("../models/pics");
const Vans = require("../models/vans");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get("/Contacto",(req,res,next)=>{

	res.render("contact.ejs");
});

router.get("/About_us",(req,res,next)=>{

	Pics.find({},(err, pics) => {
    res.render('about', {pics});
	
	});
});

router.get("/modelos",(req,res,next)=>{
    res.render('modelos');

});

router.get("/Ducato",(req,res,next)=>{
	res.render("vans/ducato")
})


module.exports = router;
