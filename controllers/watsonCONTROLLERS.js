
//import the model component
const { response } = require('express');
const WatsonTrend = require('../models/watsonDATAMODEL');
const twt = require('../models/twituser');

// const twitUser = new twitter();


//pass in the db name to the training planner class
const db = new WatsonTrend('WatsonDatabase.db');


exports.landing_page = function(req, res){

    if(twt.twitGlobal !=null){
        
        var user = JSON.parse(twt.twitGlobal._raw);
        //console.log('JSON parsed as ', user);
       // tweets = twt.getTweets(user);
        
                
    res.render('index',{
        'background':'#262d42',
        'twitterName': user.screen_name,
        'twitterUser': user.name,
        'twitterPic': user.profile_image_url,
        'tweets': twt.getTweets(user)
        //'trends': twt.getTrends()
    }
    );}
    else{
        console.log('no user logged in, loading default page');
        res.render('index',{
            'background':'#262d42'});
    }
};

exports.post_login = function(req, res){

    console.log('user is ', twt.twitGlobal.username);
    console.log('attempting to load index with user loaded'); 
    res.render('index',{
        'background':'#262d42',
        'twitterName': twt.twitGlobal.username,
        'twitterUser': twt.twitGlobal.displayName}
    );
   
};


exports.all_entries = function(req, res){
    res.send('All entries placeholder');
};

exports.about_us = function(req, res){
    res.render('about', {
        'title': 'About Us',
        'background':'#262d42',
        'url' : '/about'
    });
};

exports.contact_us = function(req, res){
    res.render('contact', {
        'title': 'Contact Us',
        'background':'#262d42'
    });
};

exports.global_trends = function(req, res){
    res.render('globaltrends', {
        'title': 'Global Trends',
        'background':'#262d42'
    });
};

exports.user_trends = function(req, res){
    res.render('usertrends', {
        'title': 'User Trends',
        'background':'#262d42'
    });
};

exports.login = function(req, res){
    res.render('login', {
        'title': 'Login',
        'background':'#262d42'
    });
};




exports.admin_login = function(req, res){
    res.render('adminLogin', {
        'title' : 'Admin Login',
        'background':'#262d42'
    });
};

exports.account = function(req, res){
    res.render('account', {
        'title': 'My Account',
        'background':'#262d42'
    });
};

exports.message_success = function(req, res){
    res.render('messagesuccess', {
        'message' : 'Thank you for your comments.',
        'title' : 'Message Sent'
    });
};

exports.post_new_contactUs = function(req, res) {
    db.addContactUsEntry(req.body.fname, req.body.lname, req.body.email, req.body.message);
    res.redirect('/messagesuccess');
};


//Author: James Doak / Antony Lockhart - Group 23