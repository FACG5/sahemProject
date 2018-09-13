const addUser = require('../database/queries/addUser');
const hashpassword = require('../utillity/hashpassword');

exports.get = (req, res) => {
  res.render('signup', { js: 'signup' });
};

exports.post = (req, response) => {
  const data = req.body;

  const {
    name, email, pass, location, spec, occupation, linkedin, facebook, mobile, img,
    description,
  } = data;

  if (data) {
    hashpassword(pass, (error, hash) => {
      if (error) {
        response.render('signup', { msg: 'Error1' });
      } else {
        const obj = {
          name, email, hash, location, spec, occupation, linkedin, facebook, mobile, img, description,
        };
        addUser(obj, (errr, pass) => {
          if (errr) {
            response.render('signup', { msg: 'This email already exists' });
          } else {
            response.render('home');
          }
        });
      }
    });
  }

};
