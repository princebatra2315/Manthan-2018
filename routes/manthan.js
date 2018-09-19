var express = require('express');
var router = express.Router();
var User = require('../models/manthan');
var mail_handler = require('../mailer');
var flash = require('connect-flash');
var expressValidator = require('express-validator');
var Result_first = require('../models/result_first');
var Result_second = require('../models/result_second');
var sortBy = require('sort-by')
var flag = 0;
router.get('/first',function(req,res){
	Result_first.find({ }).then(function(data){
	console.log(data);
	data.sort(sortBy('rank'));
	res.render('leaderboard_first',{message: data});
	});
});
router.get('/second',function(req,res){
	Result_second.find({ }).then(function(data){
	console.log(data);
	data.sort(sortBy('rank'));
	res.render('leaderboard_second',{message: data});
	});
});
router.get('/',function(req,res){
	res.render('result_home');
})
// router.get('/admin1',function(req,res){
// 	res.render('admin1', {message: req.flash('RegisterMessage')});
// });
// router.get('/admin2',function(req,res){
// 	res.render('admin2', {message: req.flash('RegisterMessage')});
// });
// router.post('/admin1',function(req,res){
// 	var f_rank = req.body.rank;
// 	var f_name = req.body.name;
// 	var f_rollno = req.body.rollno;
// 	var f_score = req.body.score;

// 	var result_first = new Result_first({ rank: f_rank, name: f_name, rollno: f_rollno, score: f_score});
// 	Result_first.create(result_first,function(err,result_first){
//        console.log("hello");
//        if(err)
//        {
//        	console.log(err);
//          req.flash('RegisterMessage', "Failure!!");
//          res.render('admin1', {message: req.flash('RegisterMessage')})
//        }
//        else
//        {
//        	console.log(result_first);
//          req.flash('RegisterMessage', "Success!! ");
//          res.render('admin1', {message: req.flash('RegisterMessage')})
//        }       	
// 	});
// })
// router.post('/admin2',function(req,res){
// 	var f_rank = req.body.rank;
// 	var f_name = req.body.name;
// 	var f_rollno = req.body.rollno;
// 	var f_score = req.body.score;

// 	var result_second = new Result_second({ rank: f_rank, name: f_name, rollno: f_rollno, score: f_score});
// 	Result_second.create(result_second,function(err,result_second){
//        if(err)
//        {
//        	console.log(err);
//          req.flash('RegisterMessage', "Failure!!");
//          res.render('admin2', {message: req.flash('RegisterMessage')})
//        }
//        else
//        {
//        	console.log(result_second);
//          req.flash('RegisterMessage', "Success!! ");
//          res.render('admin2', {message: req.flash('RegisterMessage')})
//        }       	
// 	});
// })
// router.get('/',function(req,res){
// 	res.render('manthan', {message: req.flash('RegisterMessage')});
// });
// router.get('/success',function(req,res){
// res.render('thankyou');
// });
// router.get('/failure',function(req,res){
// 	res.render('failure');
// });
// router.post('/',function(req,res){
// 	var f_name = req.body.name;
// 	var f_rollno = req.body.rollno;
// 	var f_branch = req.body.branch;
// 	var f_year = req.body.year;
// 	var f_email = req.body.email;
// 	var f_phone = req.body.phone;
// 	var f_hackerearthprofile = req.body.hackerearthprofile;
// 	var f_codechefprofile = req.body.codechefprofile;
// 	var f_spojprofile = req.body.spojprofile;
// 	var f_opensourcelinks = req.body.opensourcelinks;
// 	var f_otherprofiles = req.body.otherprofiles;
//     var f_project = req.body.project;
//     var f_club = req.body.club;

//     req.checkBody('name','Name cannot be empty.').notEmpty();
// 	req.checkBody('phone','Mobile number must be of 10 digits.').isLength({ min: 10, max: 10 });
// 	req.checkBody('email','Email is not valid.').isEmail();
// 	req.checkBody('rollno','Roll No. cannot be empty.').notEmpty();
//     var errors = req.validationErrors();
// 	if(errors)
// 	{
// 		console.log(errors);
//         req.flash('RegisterMessage', errors);
//         res.render('manthan', {message: req.flash('RegisterMessage')});
// 	}
// 	else
// 	{
// 	   User.find({email:f_email}).then(function(data){
// 	    console.log(data.length);
// 	    if(data.length != 0)
// 	    res.redirect('/failure');
// 	    else
// 	    {
// 	    	var user = new User({ name: f_name,rollno:f_rollno,branch:f_branch,year:f_year, email: f_email,phone:f_phone,hackerearthprofile:f_hackerearthprofile,codechefprofile:f_codechefprofile,spojprofile:f_spojprofile,opensourcelinks:f_opensourcelinks,otherprofiles:f_otherprofiles,project:f_project,club:f_club});
// 	   		console.log(user);
// 	   		User.create(user,function(err,user){
// 			if(err)
// 			{
// 				console.log('Errors are present');
// 				res.render('manthan');
// 			}
// 			else
// 			{
//                 mail_handler(user.email,user.name);
//                 res.redirect('/success');
// 			}
// 	      });
// 	    }

// 	   });
// 	}
// });
module.exports = router;