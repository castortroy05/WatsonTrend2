const isLoggedIn = (req, res, next) => {
  console.log('checking if user is logged in ', req.user);
    if (req.user) {
      next();
    } else {
      console.log('not logged in');
      res.status(401).send('Not Logged In');
    }
  };
  
  
  module.exports = isLoggedIn;