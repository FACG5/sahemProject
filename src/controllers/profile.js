const getProfile = require('../database/queries/getProfile');


exports.get = (req, res) => {
  const { id } = req.params;
  getProfile(id, (err, response) => {
    if (err) {
      res.render('error404');
    } else {
      res.render('profile', { response , css: 'profile' });
    }
  });
};
