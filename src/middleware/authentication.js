const { verify } = require('jsonwebtoken');

function isLogedIn(req, res, next) {
  req.userAuth = false;
  if (req.cookies) {
    const { data } = req.cookies;
    if (data) {
      verify(data, process.env.SECRET, (err, jwt) => {
        if (err) {
          return;
        }
        req.userAuth = true;
        req.jwt = jwt;
      });
    }
  }
  next();
}

module.exports = isLogedIn;
