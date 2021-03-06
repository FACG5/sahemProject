const getAdvancedSearchedProjects = require('../database/queries/getAdvancedSearchedProjects');

exports.getAdvancedSearchForm = (req, res) => {
  res.render('advancedsearch', {
    css: 'css/signup.css',
    authenticated: req.userauthed,
    user: req.token,
  });
};

exports.getAdvancedSearchResults = (req, res) => {
  const { sector, maxfund, minfund } = req.query;
  getAdvancedSearchedProjects(
    {
      sector,
      maxfund,
      minfund,
    }, (getSearchedProjectsErr, getSearchedProjectsRes) => {
      if (getSearchedProjectsErr) {
        res.render(getSearchedProjectsErr);
      } else {
        res.render('search', {
          css: 'css/home.css',
          getSearchedProjectsRes,
          authenticated: req.userauthed,
          user: req.token,
        });
      }
    },
  );
};
