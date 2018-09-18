const getDate = require('./getDate');
const transfer = require('./transfer');

module.exports = {
  afterMonth: getDate.afterMonth,
  now: getDate.now,
  transfer,
};
