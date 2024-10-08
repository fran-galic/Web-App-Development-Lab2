//importam express funkciju i stvaram prkeo nje novi ruter
var express = require('express');
var router = express.Router();


function dobiIme(id, cart){
    for(var i = 0; i < cart.length; i++){
        if(cart[i].id == id){
            return cart[i].name;
        }
    }
}

function dobiCart(req){
   var cart = req.session.cart;
   if(!cart){
       cart = req.session.cart = [];
   }
   return cart;
}

router.get('/getAll', function(req, res){
    res.render('cart', 
        {title: 'Citadel - cart',
        cart: dobiCart(req)});
});

router.post('/add/:id', function(req, res){
    var cart = dobiCart(req);
    let search = cart.find((p) => p.id === req.params.id);
    if (search === undefined) {
        cart.push({ id: req.params.id, name: dobiIme(req.params.id, cart), col: 1});
    } else {
        search.col += 1;
    }
    res.redirect('/cart/getAll');
});

router.post('/remove/:id', function(req, res){
    var cart = dobiCart(req);
    let search = cart.find((p) => p.id === req.params.id);
    if (search.col == 1) {
        search.col -= 1;
        cart = cart.filter((p) => p.col != 0);
    } else {
        search.col -= 1;
    }
    res.redirect('/cart/getAll');
});

module.exports = router;