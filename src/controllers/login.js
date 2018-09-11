const bcrypt = require('bcryptjs');
const checkUser = require('../database/queries/checkUser');
const { createCookie } = require('../utillity/authentication');

exports.get = (request, response) => {
  response.render('login', { js: 'login' });
};

exports.post = (request, response) => {
  const email = request.body.email;
  const pass = request.body.pass;

  checkUser(email, (err, result) => {
    if (err) {
      response.render('login', { msg: 'error1' });
    } else if (result.length === 0) {
      response.render('login', { msg: 'This email not exist' });
    } else {
      bcrypt.compare(pass, result[0].pass, (error, res) => {
        if (res === false) {
          response.render('login', { msg: 'Password is Wrong' });
        } else {
          createCookie(result[0].id, (errr, token) => {
            if (errr) {
              response.render('login', { msg: 'error in token' });
            } else {
              response.setHeader(
                'Set-Cookie',
                `data=${token};httpOnly;Max-age=90000000`,
              );
              response.render('home', { msg: 'Welcome in Sahem Site' });
            }
          });
        }
      });
    }
  });
};
