var express = require('express');
var router = express.Router();
var User = require('../models/manthan');
var mail_handler = require('../mailer');
var flash = require('connect-flash');
var expressValidator = require('express-validator');

router.get('/',function(req,res){
	res.render('manthan', {message: req.flash('RegisterMessage')});
});

router.post('/',function(req,res){

	var f_name = req.body.name;
	var f_rollno = req.body.rollno;
	var f_branch = req.body.branch;
	var f_year = req.body.year;
	var f_email = req.body.email;
	var f_phone = req.body.phone;
	var f_hackerearthprofile = req.body.hackerearthprofile;
	var f_codechefprofile = req.body.codechefprofile;
	var f_spojprofile = req.body.spojprofile;
	var f_opensourcelinks = req.body.opensourcelinks;
	var f_otherprofiles = req.body.otherprofiles;
    var f_project = req.body.project;
    var f_club = req.body.club;

    req.checkBody('name','Name cannot be empty.').notEmpty();
	req.checkBody('phone','Mobile number must be of 10 digits.').isLength({ min: 10, max: 10 });
	req.checkBody('email','Email is not valid.').isEmail();
	req.checkBody('rollno','Roll No. cannot be empty.').notEmpty();

var errors = req.validationErrors();
	if(errors)
	{
        req.flash('RegisterMessage', errors);
        res.render('manthan', {message: req.flash('RegisterMessage')});
	}
	else
	{
	   var user = new User({ name: f_name,rollno:f_rollno,branch:f_branch,year:f_year, email: f_email,phone:f_phone,hackerearthprofile:f_hackerearthprofile,codechefprofile:f_codechefprofile,spojprofile:f_spojprofile,opensourcelinks:f_opensourcelinks,otherprofiles:f_otherprofiles,project:f_project,club:f_club});
	   console.log(user);
	   User.create(user,function(err,user){
			if(err)
			{
				console.log('Errors are present');
				res.render('manthan');
			}
			else
			{
                mail_handler(user.email,user.name);
                res.render('thankyou');
			}
	});
	}
});
module.exports = router;