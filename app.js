var express = require('express');
var ejs = require('ejs');
var mongoose = require('mongoose');
var mongo = require('mongodb');
var bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
var path = require('path');
var flash = require('connect-flash');
var expressValidator = require('express-validator');
var session = require('express-session');
var cookieParser = require('cookie-parser');

var app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false })) 

// Mongoose Connection 
mongoose.connect('mongodb://princebatra2315:238Uranium@ds141932.mlab.com:41932/manthan2018', { useNewUrlParser: true })
// mongoose.connect('mongodb://prince:prince2315@ds139632.mlab.com:39632/manthan', { useNewUrlParser: true })

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error: '));

//Show that our db is succesfully Connected
db.once('open', function(){
console.log("Connected to Mongo Lab: ");
})


app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
      var namespace = param.split('.')
      , root    = namespace.shift()
      , formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg   : msg,
      value : value
    };
  }
}));
app.use(cookieParser('secret'));
app.use(session({cookie: { maxAge: 60000 }}));
app.use(flash());

//Set path for the Routes
var routes = require('./routes/manthan');

//Setting the views
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

app.use('/*',function(req,res){
  res.render('404');
});
var port = process.env.PORT || 3000
app.listen(port, function() {
    console.log("App is running on port " + port);
});