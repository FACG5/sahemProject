const imgur = require('./../utillity/uploadPhoto');
const checkCreateProposal = require('./../utillity/verifyForm');
const createProposal = require('./../database/queries/createProposal');

exports.get = (req, res) => {
  if (req.userAuth) {
    res.render('createProposal', { js: 'createProposal', css: 'createProposal' });
  } else {
    res.redirect('/');
  }
};

exports.post = (req, res) => {
  if (req.userAuth) {
    if (checkCreateProposal(req)) {
      const obj = req.body;
      obj.user_id = req.jwt.id;
      imgur.upload(req.file.buffer)
        .then((result) => {
          obj.img = result.data.link;
          return obj;
        }).then(createProposal)
        .then(() => {
          res.redirect('/');
        })
        .catch(() => {
          res.status(503).send('503 Service Unavailable');
        });
    } else {
      res.status(400).send('400 Bad request');
    }
  } else {
    res.status(401).send('401 Unauthorized');
  }
};
