const dbconnection = require('../db_connection');

const insertDonation = (object) => {
  const sql = {
    text: 'INSERT INTO donation(project_id, amount, iban, name, email) VALUES ($1, $2, $3, $4);',
    values: [object.id, object.amount, object.iban, object.name, object.email],
  };
  return dbconnection.query(sql);
};

module.exports = insertDonation;
