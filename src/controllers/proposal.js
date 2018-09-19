const getProposal = require('./../database/queries/getProposal');

exports.get = (req, res) => {
  getProposal(req.params.id).then((result) => {
    const obj = result.rows[0];
    res.render('proposalDetails', { css: 'propsalDetails', js: 'proposalDetails', obj });
  }).catch(() => {
    res.status(404).send('Page NOT Found');
  });
};
