// extractanje svih potrbenih modula i funkcija
var express = require("express");   // za server
var bodyParser = require('body-parser');  // za parsiranje
var session = require('express-session'); // za stavranje sesije
var path = require('path'); // za rad s putanjama

// stavram server
var app = express();

//static sadrzaj ce se nalaziti u public direktoriju
app.use(express.static('public'));  // ukoliko se trazi staiciki sadrzaj prvo mi gledja u public direktoriju; ot je middlewere
// omogucujem korsitenje ejs view-engine
app.set('view engine', 'ejs');

//korstimo middlewer eki omgucava korstenje sjednica
app.use(session({
    user: '',
    cart: [],
    resave: false,
    saveUninitialized: true,  // zelimo da se svkai put kad user dode i nemor auopce bit ulogiran da se sjednica sprmei u sprmenik sjedinca, ??? i vrait coookie ???
    secret: 'tajna bato',
    cookie : {
        maxAge : 60000 * 60 // cookie traje sat vremena
    }
}));

//govori na kojoj putnaji da server trazi views
app.set('views', path.join(__dirname, 'views'));
// middlerwere koji govori kako bi server trebao parsirati podatke u tijelu, bilo html forma, teskt ili JSON;
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(bodyParser.text());

//improtmao rtuere iz routes direktorija na ansu express aplikaicju
var homeRouter = require('./routes/home.routes');
//var cartRouter = require('./routes/cart.routes'); 

//spajamo rutere na express aplikaciju i smao defirnirmao da koji god zahtjev zapocinje sa /home ili /cart da ce se prolsjediit na odgovarjuci ruter
app.use('/home', homeRouter);
//app.use('/cart', cartRouter);

//presumjerava get zahrjev za obicnu putanju na putnaju /home/getCategories
app.get('/', function(req, res){
    res.redirect('/home/getCategories');
})

//krecem slusait na portu i zapocinjem rad servera
app.listen(4000);