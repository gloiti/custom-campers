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
    res.render('about');
});

router.get("/elige-tu-furgoneta",(req,res,next)=>{
    res.render('elige');

});

router.get("/extras",(req,res,next)=>{
    res.render('extras');

});

router.get("/techos",(req,res,next)=>{
    res.render('techos');

});

router.get("/L2H2",(req,res,next)=>{
    res.render('ducatos/ducato1');

});
router.get("/L3H2",(req,res,next)=>{
    res.render('ducatos/ducato2');

});

router.get("/L4H2",(req,res,next)=>{
    res.render('ducatos/ducato3');

});







module.exports = router;
