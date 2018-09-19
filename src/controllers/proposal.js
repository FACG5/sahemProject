const getProposal = require('./../database/queries/getProposal');

exports.get = (req, res) => {
  getProposal(req.params.id).then((result) => {
    if (result.rows.length === 0) {
      return res.status('404').send('Page Not Found');
    }
    const obj = result.rows[0];
    res.render('proposalDetails', { css: 'propsalDetails', js: 'proposalDetails', obj });
  }).catch(() => {
    res.status(404).send('Page NOT Found');
  });
};
