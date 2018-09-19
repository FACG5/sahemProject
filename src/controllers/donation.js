const insertDonation = require('./../database/queries/insertDonation');

exports.post = (req, res) => {
  insertDonation(req.body)
    .then(() => {
      res.redirect('/');
    }).catch((err) => {
      res.status(404).send(err);
    });
};
