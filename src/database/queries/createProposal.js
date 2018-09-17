const db = require('./../db_connection.js');

const createProposal = (obj) => {
  return db.query('INSERT INTO projects(user_id, name, field, img, fund, camp_start, camp_end, abstract) VALUES ($1,$2,$3,$4,$5,$6,$7,$8)', [obj.user_id, obj.name, obj.field, obj.img, obj.fund, obj.startCamp, obj.endCamp, obj.abstract]);
};

module.exports = createProposal;
