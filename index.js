// import the express framework
    const express = require('express');
// import the path module
    const path = require('path');
// use express to create a web application.
    const app = express();
// set the public directory for relevant files.
    const public = path.join(__dirname, 'public');
//import the mustache module
    const mustache = require('mustache-express');
//import twitter API
    const Twitter = require ('twitter');
//import twitter API details
const twit = new Twitter({
    consumer_key: 'zDZ6PjzXlfy2M29lsLeF4ylHW',
    consumer_secret: 'QiX8V6dIwGo1U35suYMulwNn1HgtlbdiE5wI27EXa1v1MutZvU',
    access_token_key: '20047218-4k1sHeKv8BYxCYAsppLYkkySmElEqB5490vMFKxBe',
    access_token_secret: 'z5bngaRT4GrXqmxkwtokRRmcC8paM8G16hdj6AA7aM75Z',
    bearer_token: 'AAAAAAAAAAAAAAAAAAAAACVsOgEAAAAAqmi9ez6NKcVS713HPlNckw1Kv3A%3DniXCFWwXwpWGa4m8ptq4gM9r0BoTJDmVxm4MNvAtPYRus4V2Gj'
});
//import passport
const passport = require('passport');
require('./auth/passport');
//import cookieSession
const cookieSession = require('cookie-session');
//import ability to check if user is logged in 
const isLoggedIn = require('./auth/auth');


//setup passport authentication
app.use(passport.initialize());
app.use(passport.session());
    
//app.get('env') === 'production' ? true : false;

app.set('trust proxy', 1);



app.use(cookieSession({
    name: 'twitter-auth-session',
    keys: ['key1', 'key2'],
    maxAge: '631138519'
  }));
    


//instruct application to use body parser module
app.use(express.urlencoded({extended: false}));


// create and register a mustache engine and template
app.engine('mustache', mustache());
app.set('view engine', 'mustache');


// instruct express to use the public folder for static resources.
app.use(express.static(public));

//import the new router and map it to all requests
const router = require('./routes/watsonROUTES');
app.use('/', router);

// start a server on localhost:4000 - control + c will quit the application.
app.listen(4000, function() {
    console.log('The application server has been started on port 4000 - localhost:4000. Use "Ctrl + c" to close and quit.');
});



//Author: James Doak / Antony Lockhart - Group 23