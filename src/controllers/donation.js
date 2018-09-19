const insertDonation = require('./../database/queries/insertDonation');

exports.post = (req, res) => {
  console.log('what is this?');
  console.log(req.body);
  insertDonation(req.body)
    .then((result) => {
      console.log(result);
      res.redirect('/');
    }).catch((err) => {
      res.status(404).send(err);
    });
};
