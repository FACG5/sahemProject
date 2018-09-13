const addUser = require('../database/queries/addUser');
const checkUser = require('../database/queries/checkUser');
const hashpassword = require('../utillity/hashpassword');

exports.get = (req, res) => {
  res.render('signup', { js: 'signup', css: 'signup' });
};

exports.post = (req, response) => {
  const data = req.body;
  const name = data.name;
  const email = data.email;
  const pass = data.pass;
  const location = data.location;
  const spec = data.spec;
  const occupation = data.occupation;
  const linkedin = data.linkedin;
  const facebook = data.facebook;
  const mobile = data.mobile;
  const img = data.img;
  const description = data.description;

  checkUser(email, (err, result) => {
    if (err) {
      response.render('signup', { msg: 'error' });
    } else if (name && email && pass && location && spec && occupation && linkedin && facebook && mobile && img && description) {
      hashpassword(pass, (error, hash) => {
        if (error) {
          response.render('signup', { msg: 'Error1' });
        } else { 
          const obj = {
            name, email, hash, location, spec, occupation, linkedin, facebook, mobile, img, description
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
  });
};
