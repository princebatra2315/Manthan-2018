var mongoose = require('mongoose');

mongoose.connect('mongodb://prince:prince2315@ds139632.mlab.com:39632/manthan', { useNewUrlParser: true })

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

