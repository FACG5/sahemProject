const addUser = require('../database/queries/addUser');
const hashpassword = require('../utillity/hashpassword');
const { createCookie } = require('../utillity/authentication');
const imgur = require('./../utillity/uploadPhoto');


exports.get = (req, res) => {
  res.render('signup', { js: 'js/signup.js', css: 'css/signup.css' });
};

exports.post = (req, response) => {
  const data = req.body;

  const {
    name, email, pass, location, spec, occupation, linkedin, facebook, mobile,
    description,
  } = data;
  imgur.upload(req.file.buffer)
    .then((result) => {
      const img = result.data.link;


      if (data) {
        hashpassword(pass, (error, hash) => {
          if (error) {
            response.render('signup', { msg: error });
          } else {
            const obj = {
              name,
              email,
              hash,
              location,
              spec,
              occupation,
              linkedin,
              facebook,
              mobile,
              img,
              description,
            };
            addUser(obj, (errr, user) => {
              if (errr) {
                response.render('signup', { msg: error });
              } else {
                createCookie({ id: user.id, name: user.name }, (err, token) => {
                  if (err) response.render('/login', { css: 'css/login.css' });
                  else {
                    response.setHeader(
                      'Set-Cookie',
                      `data=${token};httpOnly;Max-age=99999999999`,
                    );
                    response.redirect('/');
                  }
                });
              }
            });
          }
        });
      }
    });
};