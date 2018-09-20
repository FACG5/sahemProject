const getSearchedProjects = require('../database/queries/getSearchedProjects');


exports.get = (req, res) => {
  const { projectname } = req.query;
  getSearchedProjects({ projectname }, (getSearchedProjectsErr, getSearchedProjectsRes) => {
    if (getSearchedProjectsErr) {
      res.render('error404');
    } else {
      res.render('search', {
        css: 'css/home.css',
        getSearchedProjectsRes,
        authenticated: req.userauthed,
        user: req.token,
      });
    }
  });
};
