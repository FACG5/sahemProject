const bcrypt = require('bcryptjs');
const checkUser = require('../database/queries/checkUser');
const { createCookie } = require('../utillity/authentication');

exports.get = (request, response) => {
  response.render('login', { js: 'js/login.js', css: 'css/login.css' });
};

exports.post = (request, response) => {
  const { pass, email } = request.body;
  checkUser(email, (err, result) => {
    if (err) {
      response.render('login', { msg: 'error1' });
    } else if (result.length === 0) {
      response.render('login', { msg: 'User doesn\'t exist' });
    } else {
      bcrypt.compare(pass, result[0].pass, (error, res) => {
        if (res === false) {
          response.render('login', { msg: 'Password is Wrong' });
        } else {
          createCookie({ id: result[0].id, name: result[0].name }, (errr, token) => {
            if (errr) {
              response.render('login', { msg: 'error in token' });
            } else {
              response.setHeader(
                'Set-Cookie',
                `data=${token};httpOnly;Max-age=90000000`,
              );
              response.redirect('/');
            }
          });
        }
      });
    }
  });
};
