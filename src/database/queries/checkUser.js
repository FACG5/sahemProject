
const dbconnection = require('../db_connection');

const checkUser = (email, cb) => {
  const sql = {
    text: 'SELECT * FROM users WHERE email=$1',
    values: [email],
  };
  dbconnection.query(sql, (err, res) => {
    if (err) {
      cb(err);
    } else {
      cb(null, res.rows);
    }
  });
};
module.exports = checkUser;
