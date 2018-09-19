var mongoose = require('mongoose');

// mongoose.connect('mongodb://prince:prince2315@ds139632.mlab.com:39632/manthan', { useNewUrlParser: true })
mongoose.connect('mongodb://princebatra2315:238Uranium@ds141932.mlab.com:41932/manthan2018', { useNewUrlParser: true })

var db = mongoose.connect

var Result_first = mongoose.Schema({
     rank: Number,
     name: String,
     rollno: String,
     score: Number,
});

var Result_first = module.exports = mongoose.model('Result_first',Result_first);
module.exports.createUser = function(newUser,callback){
	newResult_first.save(callback);
}

