var mongoose = require('mongoose');

mongoose.connect('mongodb://princebatra2315:238Uranium@ds141932.mlab.com:41932/manthan2018', { useNewUrlParser: true })

var db = mongoose.connect

var User = mongoose.Schema({
     name: String,
     rollno: String,
     branch: String,
     year: String,
     email: String,
     phone: String,
     hackerearthprofile: String,
     codechefprofile: String,
     spojprofile: String,
     opensourcelinks: String,
     otherprofiles: String,
     project: String,
     club: String
});

var User = module.exports = mongoose.model('User',User);
module.exports.createUser = function(newUser,callback){
	newUser.save(callback);
}

