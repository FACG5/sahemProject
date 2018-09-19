const { authCheck } = require('../utillity/authentication');
const getPopularProjects = require('../database/queries/getPopularprojects');

exports.get = (req, res) => {
  authCheck(req, (err, token) => {
    if (err) {
      getPopularProjects((getPopularProjectsErr, popularprojects) => {
        if (!getPopularProjectsErr) {
          res.render('home', {
            css: 'css/home.css',
            authenticated: false,
            popularprojects,
          });
        }
      });
      // res.render('home', { css: 'css/home.css', authenticated: false });
    } else if (token) {
      getPopularProjects((getPopularProjectsErr, popularprojects) => {
        if (!getPopularProjectsErr) {
          res.render('home', {
            css: 'css/home.css',
            authenticated: true,
            user: token,
            popularprojects,
          });
        }
      });
    } else {
      getPopularProjects((getPopularProjectsErr, popularprojects) => {
        if (!getPopularProjectsErr) {
          res.render('home', {
            css: 'css/home.css',
            authenticated: false,
            popularprojects,
          });
        }
      });
      // res.render('home', { css: 'css/home.css', authenticated: false });
    }
  });
};
