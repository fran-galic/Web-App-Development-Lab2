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

function getProducts(id){
    var catg = data.categories;
    for(var i = 0; i < catg.length; i++){
        if(catg[i].id == id){
            return catg[i].products;
        }
    }
}

function getName(id, products){
    for(var i = 0; i < products.length; i++){
        if(products[i].id == id){
            return products[i].name;
        }
    }
}

router.get('/getCategories', function(req, res){
   res.render('home', 
       {title: 'Citadel', 
       catg: data.categories,
       cart_col: odrediKolicinu(req),
       state: 0});
});

router.get('/getProducts/:id', function(req, res, next){
    var products = getProducts(req.params.id);
    res.render('home', 
        {title: 'Citadel', 
        catg: data.categories,
        Cid: req.params.id,
        products: products,
        Cname: data.categories.find(c => c.id === req.params.id).name,
        cart_col: odrediKolicinu(req),
        state: 1});
});

router.post('/getProducts/:Cid/:id', function(req, res, next){
    var cart = req.session.cart;
    var products = getProducts(req.params.Cid);
    if(!cart){
        cart = req.session.cart = [];
        cart.push({ id: req.params.id, name: getName(req.params.id, products), col: 1});
    }else{
        let search = cart.find((p) => p.id === req.params.id);
        if (search === undefined) {
            cart.push({ id: req.params.id, name: getName(req.params.id, products), col: 1});
        } else {
            search.col += 1;
        }
    }
    res.redirect('/home/getProducts/'+ req.params.Cid);
});

module.exports = router;