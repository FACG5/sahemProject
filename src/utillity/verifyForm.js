
function checkCreateProposal(req) {
  if (req.file) {
    return !(req.file.size > (1024 * 1024) && req.body.name.trim() === '' && req.body.fund.trim() === '' && Number.isNaN(+req.body.fund) && +req.body.fund < 500 && req.body.abstract.trim() === '');
  }
  return false;
}

module.exports = checkCreateProposal;
