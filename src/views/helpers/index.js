const proposalDetails = require('./proposalDetails');
const getDate = require('./getDate');
const transfer = require('./transfer');

module.exports = {
  getPercent: proposalDetails.getPercent,
  getRemain: proposalDetails.getRemain,
  getRemainDays: proposalDetails.getRemainDays,
  afterMonth: getDate.afterMonth,
  now: getDate.now,
  transfer,
};
