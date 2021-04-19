const passport = require('passport');
const TwitterStrategy = require('passport-twitter').Strategy;passport.serializeUser(function(user, done) {
  done(null, user);
});passport.deserializeUser(function(user, done) {
  done(null, user);
});passport.use(new TwitterStrategy({
  consumerKey: "zDZ6PjzXlfy2M29lsLeF4ylHW",
  consumerSecret: "QiX8V6dIwGo1U35suYMulwNn1HgtlbdiE5wI27EXa1v1MutZvU",
  callbackURL: "http://www.localhost:4000/auth/twitter/callback",
},
function(accessToken, refreshToken, profile, done) {
  console.log(profile.username, ' logged in');
  return done(null, profile);
}
));

const isLoggedIn = (req, res, next) => {
  console.log('checking if user is logged in ', user);
    if (req.user) {
      next();
    } else {
      console.log('not logged in');
      res.status(401).send('Not Logged In');
    }
  };
  


  
  module.exports = isLoggedIn;