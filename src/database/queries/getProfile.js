const dbconnection = require('../db_connection');

const getProfile = (userId, cb) => {
  const sql = {
    text: 'SELECT * FROM USERS WHERE id = $1',
    values: [userId],
  };

  dbconnection.query(sql, (err, res) => {
    if (err) {
      cb(err);
    } else {
      cb(null, res.rows);
    }
  });
};

module.exports = getProfile;
