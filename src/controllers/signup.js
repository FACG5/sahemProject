const addUser = require('../database/queries/addUser');
const hashpassword = require('../utillity/hashpassword');
const validateForm = require('../utillity/validationSignup');

exports.get = (req, res) => {
  res.render('signup', { js: 'signup', css: 'signup' });
};

exports.post = (req, response) => {
  const data = req.body;
  const { pass } = data;
  response.locals.js = 'signup';
  response.locals.css = 'signup';
  validateForm(data, (state, msg) => {
    if (!state) {
      response.render('signup', { msg });
    } else {
      hashpassword(pass, (error, hash) => {
        if (error) {
          response.render('signup', { msg: 'error' });
        } else {
          delete data.pass;
          data.hash = hash;
          addUser(data, (err) => {
            if (err) {
              response.render('signup', { msg: 'This email already exists' });
            } else {
              response.redirect('/');
            }
          });
        }
      });
    }
  });
};
