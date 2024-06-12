// importam express
var express = require('express');
// stvarma novi ruter
var router = express.Router();
// importma data iz my data 
var data = require('./../data/mydata.js');

function odrediKolicinu(req){
   var cart = req.session.cart;
   if(!cart){
       return undefined;
   }
   var quantity = 0;
   for(var i = 0; i < cart.length; i++){
       quantity += cart[i].col;
   }
   return quantity;
}








router.get('/getCategories', function(req, res){
   res.render('home', 
       {title: 'Citadel', 
       catg: data.categories,
       cart_col: odrediKolicinu(req),
       state: 0});
});







module.exports = router;